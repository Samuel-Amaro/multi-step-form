import { useEffect, useState } from "react";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

export default function useData() {

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    plan: {
      name: "arcade",
      price: 9,
      timePlan: "monthly",
    },
    factorMultiplyPricePlanYear: 10,
    addOns: [
      { name: "online service", price: 1 },
      { name: "Larger storage", price: 2 },
    ],
  };

  const [datas, setDatas] = useState(initialValues);

  const datasPlanStart = [
    {
      img: iconArcade,
      name: "Arcade",
      price: 9,
    },
    {
      img: iconAdvanced,
      name: "Advanced",
      price: 12,
    },
    {
      img: iconPro,
      name: "Pro",
      price: 15,
    },
  ];

  const dataAddons = [
    {
      name: "Online service",
      price: 1,
      description: "Access to multiplayer games",
    },
    {
      name: "Larger storage",
      price: 2,
      description: "Extra 1TB of cloud save",
    },
    {
      name: "Customizable Profile",
      price: 2,
      description: "Custom theme on your profile",
    },
  ];

  function findAddonsPrice(addOns) {
    return dataAddons.find((a) => {
      return addOns.name.toLowerCase() === a.name.toLowerCase();
    }).price;
  }

  function findPlanPrice(plan) {
    return datasPlanStart.find((a) => {
      return plan.name.toLowerCase() === a.name.toLowerCase();
    }).price;
  }

  //a cada mudança na propriedade plan.timePlan, recalcula um novo preço
  useEffect(() => {
    setDatas((d) => {
      return {
        ...d,
        ...{
          plan: {
            name: d.plan.name,
            price:
              d.plan.timePlan === "monthly"
                ? findPlanPrice({ name: d.plan.name, price: d.plan.price })
                : findPlanPrice({ name: d.plan.name, price: d.plan.price }) *
                  d.factorMultiplyPricePlanYear,
            timePlan: d.plan.timePlan,
          },
        },
        ...{
          addOns:
            d.addOns.length > 0
              ? d.addOns.map((a) => {
                  return {
                    name: a.name,
                    price:
                      d.plan.timePlan.toLowerCase() === "monthly"
                        ? findAddonsPrice(a)
                        : findAddonsPrice(a) * d.factorMultiplyPricePlanYear,
                  };
                })
              : [],
        },
      };
    });
  }, [datas.plan.timePlan]);

  return {
    datas, setDatas, dataAddons, datasPlanStart
  }
}

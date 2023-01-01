import { useState } from "react";
import CardAddons from "./CardAddons";
import FormWrapper from "./FormWrapper";

export default function StepAddOns(props) {
  //TODO: LOGICA CORRETA DO STEP ADD ONLS, MAS A LOGICA PARA TER CONTROLE DOS ADD ONLS MARCADOS OU DESMARCADOS ESTA ERRADA.
  //TODO: CORRIGIR
  const dataAddons = [
    {
      name: "Online service",
      price: 1,
      description: "Access to multiplayer games",
      /*checkedDefault: true,*/
    },
    {
      name: "Larger storage",
      price: 2,
      description: "Extra 1TB of cloud save",
      /*checkedDefault: true,*/
    },
    {
      name: "Customizable Profile",
      price: 2,
      description: "Custom theme on your profile",
      /*checkedDefault: false,*/
    },
  ];
  const addOnsDefaultsCheckeds = props.datas.addOns;
  const [addonsSelecteds, setAddonsSelecteds] = useState(
    props.datas.addOns
  );

  function isCheckedAddOns(addOns) {
    let isChecked = null;
    addOnsDefaultsCheckeds.forEach((element) => {
      if (
        element.name.toLowerCase() === addOns.name.toLowerCase() &&
        element.price === addOns.price
      ) {
        isChecked = true;
      }
    });
    return isChecked;
  }

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      {dataAddons.map((addOns, index) => {
        return (
          <CardAddons
            name={addOns.name}
            description={addOns.description}
            price={addOns.price}
            planSelectedTime={props.datas.plan.timePlan}
            key={index}
            isChecked={isCheckedAddOns(addOns) ? true : false}
            setDatas={props.setDatas}
            setAddonsSelecteds={setAddonsSelecteds}
            addonsSelecteds={addonsSelecteds}
          />
        );
      })}
    </FormWrapper>
  );
}

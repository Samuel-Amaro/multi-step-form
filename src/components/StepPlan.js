import CardPlan from "./CardPlan";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { useState } from "react";
import FormWrapper from "./FormWrapper";

export default function StepPlan(props) {
  const planCurrent = props.datas.plan;
  const [planTimeSelected, setPlanTimeSelected] = useState(
    planCurrent.timePlan.toLowerCase()
  );
  const [planSelected, setPlanSelected] = useState(planCurrent);
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

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className="form__Container-Plans">
        {datasPlanStart.map((plan, index) => {
          return (
            <CardPlan
              src={plan.img}
              namePlan={plan.name}
              price={plan.price}
              planSelectedTime={planTimeSelected}
              key={index}
              isSelected={
                planCurrent.name.toLowerCase() === plan.name.toLowerCase() &&
                planCurrent.price === plan.price
                  ? true
                  : false
              }
              setPlanSelected={setPlanSelected}
              setDatas={props.setDatas}
            />
          );
        })}
      </div>
      <fieldset className="form__Choose-Plan">
        <label className="form__Label" htmlFor="option-monthly">
          Monthly
        </label>
        <div className="form__Switch-Plan">
          <input
            type="radio"
            name="plan-option"
            className="form__Input"
            value="monthly"
            id="option-monthly"
            title="Option Plan monthly"
            required
            onChange={(event) => {
              setPlanTimeSelected(event.target.value);
              props.setDatas((d) => {
                return {
                  ...d,
                  ...{
                    plan: {
                      name: d.plan.name,
                      price: d.plan.price,
                      timePlan: event.target.value,
                    },
                  },
                };
              });
            }}
            checked={planTimeSelected === "monthly" ? true : false}
          />
          <input
            type="radio"
            name="plan-option"
            className="form__Input"
            value="yearly"
            id="option-Yearly"
            title="Option Plan Yearly"
            required
            onChange={(event) => {
              setPlanTimeSelected(event.target.value);
              props.setDatas((d) => {
                return {
                  ...d,
                  ...{
                    plan: {
                      name: d.plan.name,
                      price: d.plan.price,
                      timePlan: event.target.value,
                    },
                  },
                };
              });
            }}
            checked={planTimeSelected === "yearly" ? true : false}
          />
          <span
            className="form__Control-Switch"
            aria-label="Click here to change your subscription plan option"
            title="Click here to change your subscription plan option"
          ></span>
        </div>
        <label className="form__Label" htmlFor="option-Yearly">
          Yearly
        </label>
      </fieldset>
    </FormWrapper>
  );
}

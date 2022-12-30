import CardPlan from "./CardPlan";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { useState } from "react";

export default function StepPlan() {
  const [planSelected, setPlanSelected] = useState("monthly");
  const datasPlan = [
    {
      img: iconArcade,
      name: "Arcade",
      price: "9",
    },
    {
      img: iconAdvanced,
      name: "Advanced",
      price: "12",
    },
    {
      img: iconPro,
      name: "Pro",
      price: "15",
    },
  ];

  return (
    <>
      <div className="form__Container-Plans">
        {datasPlan.map((plan, index) => {
          return (
            <CardPlan
              src={plan.img}
              namePlan={plan.name}
              price={plan.price}
              planSelectedTime={planSelected}
              key={index}
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
              setPlanSelected(event.target.value);
            }}
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
              setPlanSelected(event.target.value);
            }}
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
    </>
  );
}

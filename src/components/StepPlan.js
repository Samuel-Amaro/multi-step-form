import CardPlan from "./CardPlan";
import { useState } from "react";
import FormWrapper from "./FormWrapper";

export default function StepPlan(props) {
  const planInitial = props.datas.plan;
  const [planTimeSelected, setPlanTimeSelected] = useState(
    planInitial.timePlan.toLowerCase()
  );

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className="form__Container-Plans">
        {props.datasPlanStart.map((plan, index) => {
          return (
            <CardPlan
              src={plan.img}
              namePlan={plan.name}
              price={plan.price}
              planTimeSelected={planTimeSelected}
              factorMultiply={props.datas.factorMultiplyPricePlanYear}
              key={index}
              isSelected={
                planInitial.name.toLowerCase() === plan.name.toLowerCase() &&
                planInitial.price === plan.price
                  ? true
                  : false
              }
              updateFields={props.updateFields}
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
              props.updateFields({
                plan: {
                  name: planInitial.name,
                  price: planInitial.price,
                  timePlan: event.target.value,
                },
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
              props.updateFields({
                plan: {
                  name: planInitial.name,
                  price: planInitial.price,
                  timePlan: event.target.value,
                },
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

import CardPlan from "./CardPlan";
import { useState } from "react";
import FormWrapper from "./FormWrapper";
import Input from "./Input";
import "./StepPlan.css";

//TODO: ARRUMAR BOTTOM DO SECTION WRAPPER

export default function StepPlan(props) {
  const planInitial = props.datas.plan;
  const [planTimeSelected, setPlanTimeSelected] = useState(
    planInitial.timePlan.toLowerCase()
  );

  function handleChangeInput(event) {
    setPlanTimeSelected(event.target.value);
    props.updateFields({
      plan: {
        name: planInitial.name,
        price: planInitial.price,
        timePlan: event.target.value,
      },
    });
  }

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      className="form-wrapper__plan"
    >
      <div className="container-plans">
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
                planInitial.name.toLowerCase() === plan.name.toLowerCase() /*&&
                planInitial.price === plan.price*/
                  ? true
                  : false
              }
              updateFields={props.updateFields}
            />
          );
        })}
      </div>
      <fieldset className="choose-plan">
        <label className="choose-plan__label" htmlFor="option-monthly">
          Monthly
        </label>
        <div className="choose-plan__switch">
          <Input
            className="choose-plan__input"
            type="radio"
            id="option-monthly"
            name="plan-option"
            placeholder={undefined}
            value="monthly"
            onHandle={handleChangeInput}
            required={true}
            min={undefined}
            pattern={undefined}
            title="Option Plan monthly"
            checked={planTimeSelected === "monthly" ? true : false}
          />
          {/*<input
            type="radio"
            name="plan-option"
            className="choose-plan__input"
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
          */}
          <Input
            className="choose-plan__input"
            type="radio"
            id="option-Yearly"
            name="plan-option"
            placeholder={undefined}
            value="yearly"
            onHandle={handleChangeInput}
            required={true}
            min={undefined}
            pattern={undefined}
            title="Option Plan Yearly"
            checked={planTimeSelected === "yearly" ? true : false}
          />
          {/*<input
            type="radio"
            name="plan-option"
            className="choose-plan__input"
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
          */}
          <span
            className="choose-plan__control"
            aria-label="Click here to change your subscription plan option"
            title="Click here to change your subscription plan option"
          ></span>
        </div>
        <label className="choose-plan__label" htmlFor="option-Yearly">
          Yearly
        </label>
      </fieldset>
    </FormWrapper>
  );
}

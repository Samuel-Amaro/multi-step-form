import CardPlan from "./CardPlan";
import { useRef, useState } from "react";
import FormWrapper from "./FormWrapper";
import "./StepPlan.css";

export default function StepPlan(props) {
  const planInitial = props.datas.plan;
  const refSwitch = useRef(null);
  const [planTimeSelected, setPlanTimeSelected] = useState(
    planInitial.timePlan.toLowerCase()
  );

  function toggleStatus() {
    if (refSwitch.current.getAttribute("aria-checked") === "true") {
      //ativou time yearly
      refSwitch.current.setAttribute("aria-checked", "false");
    } else {
      //ativou time monthly
      refSwitch.current.setAttribute("aria-checked", "true");
    }
  }

  function togglePlan() {
    if(refSwitch.current.getAttribute("aria-checked") === "true") {
      setPlanTimeSelected("yearly");
      props.updateFields({
        plan: {
          name: planInitial.name,
          price: planInitial.price,
          timePlan: "yearly",
        },
      });
    }else{
      setPlanTimeSelected("monthly");
      props.updateFields({
        plan: {
          name: planInitial.name,
          price: planInitial.price,
          timePlan: "monthly",
        },
      });
    }
  }

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      plan={planTimeSelected === "yearly" ? false : true}
      planYearly={planTimeSelected === "yearly" ? true : false}
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
                planInitial.name.toLowerCase() === plan.name.toLowerCase()
                  ? true
                  : false
              }
              updateFields={props.updateFields}
            />
          );
        })}
      </div>
      <fieldset className="choose-plan" aria-label="Switch option plan">
        <label
          className={
            planTimeSelected === "monthly"
              ? "choose-plan__label choose-plan__label--active"
              : "choose-plan__label"
          }
          htmlFor="option-monthly"
        >
          Monthly
        </label>
        <div
          ref={refSwitch}
          className="choose-plan__switch"
          role="switch"
          aria-checked={planTimeSelected === "monthly" ? "false" : "true"}
          onPointerDown={(event) => {
            toggleStatus();
            togglePlan();
          }}
          onKeyDown={(event) => {
            if(event.key === "Enter" || event.key === " ") {
              toggleStatus();
              togglePlan();
            }
          }}
          tabIndex="0"
          title="Choose Plan with switch"
        >
          <span
            className="choose-plan__control"
            aria-label="Click here to change your subscription plan option"
            title="Click here to change your subscription plan option"
            tabIndex="0"
          ></span>
        </div>
        <label
          className={
            planTimeSelected === "yearly"
              ? "choose-plan__label choose-plan__label--active"
              : "choose-plan__label"
          }
          htmlFor="option-Yearly"
        >
          Yearly
        </label>
      </fieldset>
    </FormWrapper>
  );
}

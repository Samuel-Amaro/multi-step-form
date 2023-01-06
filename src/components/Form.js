import Sidebar from "./Sidebar";
import StepPlan from "./StepPlan";
import StepPersonalInfo from "./StepPersonalInfo";
import StepAddOns from "./StepAddOns";
import { useState } from "react";
import useData from "../functions/useData";
import StepSummary from "./StepSummary";
import TankYou from "./TankYou";

export default function Form() {
  //TODO: ENCONTRAR FORMA DE COMO DESTACAR O SIDE BAR INDICATOR STEP DE ACORDO COM O STEP, DE FORMA DINAMICA

  const { datas, setDatas, dataAddons, datasPlanStart } = useData();
  const [isFinish, setIsFinish] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formErros, setFormErros] = useState({});
  const emailRegexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegexpExp =
    /[0-9]{1}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}/;

  const steps = [
    <StepPersonalInfo
      datas={datas}
      updateFields={updateFields}
      formErros={formErros}
    />,
    <StepPlan
      datas={datas}
      updateFields={updateFields}
      datasPlanStart={datasPlanStart}
    />,
    <StepAddOns
      datas={datas}
      updateFields={updateFields}
      dataAddons={dataAddons}
    />,
    <StepSummary datas={datas} goTo={goTo} />,
  ];

  function nextStep() {
    setCurrentStepIndex((i) => {
      if (currentStepIndex < steps.length - 1) {
        return i + 1;
      }
      return i;
    });
  }

  function backStep() {
    setCurrentStepIndex((i) => {
      if (currentStepIndex > 0) {
        return i - 1;
      }
      return i;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  function updateFields(fields) {
    setDatas((d) => {
      return { ...d, ...fields };
    });
  }

  function validate(valuesFields) {
    const erros = {};
    if (!valuesFields.name.trim()) {
      erros.name = "This field is required";
    }
    if (!valuesFields.email.trim()) {
      erros.email = "This field is required";
    } else if (!emailRegexExp.test(valuesFields.email)) {
      erros.email = "This not valid email format!";
    }
    if (!valuesFields.phone.trim()) {
      erros.phone = "This field is required";
    }else if(!phoneRegexpExp.test(valuesFields.phone)) {
      erros.phone = "This not valid number phone format!";
    }
    return erros;
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (currentStepIndex === 0) {
      const v = validate({
        name: datas.name,
        email: datas.email,
        phone: datas.phone,
      });
      setFormErros(v);
      //campos validados
      if (Object.keys(v).length === 0) {
        return nextStep();
      } else {
        //campos invalidos, impede de proseguir
        return;
      }
    }
    //enquanto não estiver no ultimo passo, pode proseguir
    if (currentStepIndex !== steps.length - 1) {
      return nextStep();
    }
    //finaliza form
    setIsFinish(true);
  }

  return (
    <form
      className="Form"
      aria-label="Form to register and orders"
      onSubmit={handleSubmitForm}
    >
      <Sidebar currentStepIndex={currentStepIndex} />
      {isFinish ? (
        <TankYou />
      ) : (
        <>
          <section className="form__Content">{steps[currentStepIndex]}</section>
          <div className="form__Buttons">
            {currentStepIndex !== 0 && (
              <button
                type="button"
                className="form__Btn form__btn--Previous"
                aria-label="Button Go Back Step from Form"
                title="Button Go Back Step from Form"
                onPointerDown={(event) => {
                  backStep();
                }}
              >
                Go Back
              </button>
            )}
            <button
              type="submit"
              className={
                currentStepIndex !== steps.length - 1
                  ? "form__Btn form__btn--Next"
                  : "form__Btn form__btn--Confirm"
              }
              aria-label={
                currentStepIndex !== steps.length - 1
                  ? "Button Next Step from Form"
                  : "Button Confirm Submit from Form"
              }
              title={
                currentStepIndex !== steps.length - 1
                  ? "Button Next Step from Form"
                  : "Button Confirm Submit from Form"
              }
            >
              {currentStepIndex !== steps.length - 1 ? "Next Step" : "Confirm"}
            </button>
          </div>
        </>
      )}
    </form>
  );
}

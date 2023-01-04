import Sidebar from "./Sidebar";
import StepPlan from "./StepPlan";
import StepPersonalInfo from "./StepPersonalInfo";
import StepAddOns from "./StepAddOns";
import { useState } from "react";
import useData from "../functions/useData";
import StepSummary from "./StepSummary";
import TankYou from "./TankYou";

export default function Form() {
  //TODO: APLICAR VALIDAÇÃO DOS CAMPOS DO FORMULARIO
  //TODO: REFATORAR ALGUNS FUNCTIONS PARA TIRAR COMPLEXIDADE
  //TODO: VARIAS PARTES DO CODE USANDO MESMA FUNCTION REFACTOR, ENCAPSULAR FUNCTION SET DATAS EM UMA UPDATE FIELDS GLOBAL

  const { datas, setDatas, dataAddons, datasPlanStart } = useData();
  const [isFinish, setIsFinish] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    <StepPersonalInfo datas={datas} updateFields={updateFields} />,
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
    setDatas(d => {
      return {...d, ...fields};
    });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (currentStepIndex !== steps.length - 1) {
      return nextStep();
    }
    setIsFinish(true);
  }

  return (
    <form
      className="Form"
      aria-label="Form to register and orders"
      onSubmit={handleSubmitForm}
    >
      <Sidebar />
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

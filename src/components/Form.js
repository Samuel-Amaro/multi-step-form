import Sidebar from "./Sidebar";
import StepPlan from "./StepPlan";
import StepPersonalInfo from "./StepPersonalInfo";
import StepAddOns from "./StepAddOns";
import { useState } from "react";
import useData from "../functions/useData";
import StepSummary from "./StepSummary";
import TankYou from "./TankYou";
import Button from "./Button";

export default function Form() {

  const { datas, setDatas, dataAddons, datasPlanStart } = useData();
  const [isFinish, setIsFinish] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isStepSubmitedValid, setIsStepSubmitedValid] = useState(false);

  const steps = [
    <StepPersonalInfo
      datas={datas}
      updateFields={updateFields}
      isStepSubmitedValid={isStepSubmitedValid}
      setIsStepSubmitedValid={setIsStepSubmitedValid}
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

  function handleSubmitForm(event) {
    event.preventDefault();
    //se estiver no primeiro passo de inscrição, tem que verficiar se esta valido para proseguir
    if(currentStepIndex === 0) {
      //e esse passo for valido
      if(isStepSubmitedValid) {
        return nextStep();
      }else{
        return;
      }
    }
    //enquanto não estiver no ultimo passo, pode proseguir, os passos seguintes não precisam de validação
    if (currentStepIndex !== steps.length - 1) {
      return nextStep();
    }
    //finaliza form
    setIsFinish(true);
  }

  function handlePointerBtn(event) {
    backStep();
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
              <Button
                className="form__btn"
                type="button"
                label="Button Go Back Step from Form"
                onHandle={handlePointerBtn}
              >
                Go Back
              </Button>
            )}
            <Button
              className="form__btn"
              type="submit"
              next={currentStepIndex !== steps.length - 1 ? true : false}
              confirm={currentStepIndex !== steps.length - 1 ? false : true}
              label={
                currentStepIndex !== steps.length - 1
                  ? "Button Next Step from Form"
                  : "Button Confirm Submit from Form"
              }
              title={
                currentStepIndex !== steps.length - 1
                  ? "Button Next Step from Form"
                  : "Button Confirm Submit from Form"
              }
              onHandle={undefined}
            >
              {currentStepIndex !== steps.length - 1 ? "Next Step" : "Confirm"}
            </Button>
          </div>
        </>
      )}
    </form>
  );
}

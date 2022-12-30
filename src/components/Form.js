import Button from "./Button";
import FormWrapper from "./FormWrapper";
import Sidebar from "./Sidebar";
import StepPlan from "./StepPlan";
import StepPersonalInfo from "./StepPersonalInfo";
import StepAddOns from "./StepAddOns";

export default function Form() {
 
    const steps = [
      <FormWrapper
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <StepPersonalInfo />
      </FormWrapper>,
      <FormWrapper
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      >
        <StepPlan />
      </FormWrapper>,
      <FormWrapper
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      >
        <StepAddOns />
      </FormWrapper>,
    ];

  return (
    <form className="Form" aria-label="Form to register and orders">
      <Sidebar />
      <section className="form__Content">
       {
        steps[2]
       }
      </section>
      <div className="form__Buttons">
        <Button
          type="button"
          class="form__Btn-Previous"
          label="Button Go Back Step from Form"
          text="Go Back"
        />
        <Button
          type="button"
          class="form__Btn-Next"
          label="Button Next Step from Form"
          text=" Next Step"
        />
        <Button
          type="submit"
          class="form__Btn-Confirm"
          label="Button Confirm Submit from Form"
          text="Confirm"
        />
      </div>
    </form>
  );
}

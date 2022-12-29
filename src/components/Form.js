import Button from "./Button";
import FormWrapper from "./FormWrapper";
import Sidebar from "./Sidebar";
import StepPersonalInfo from "./StepPersonalInfo";

export default function Form() {
 
    /*const steps = [
   <FormWrapper
     title="Personal info"
     description="Please provide your name, email address, and phone number."
   >
     <StepOne />
   </FormWrapper>,
 ];
 */

  return (
    <form className="Form" aria-label="Form to register and orders">
      <Sidebar />
      <section className="form__Content">
        <FormWrapper
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        >
          <StepPersonalInfo />
        </FormWrapper>
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

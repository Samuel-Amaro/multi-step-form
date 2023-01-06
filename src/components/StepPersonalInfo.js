import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";

export default function StepPersonalInfo(props) {
  const emailRegexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegexpExp =
    /[0-9]{1}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}/;
  const initialValues = {
    name: props.datas.name,
    email: props.datas.email,
    phone: props.datas.phone,
  };
  const [formErros, setFormErros] = useState({});

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
    } else if (!phoneRegexpExp.test(valuesFields.phone)) {
      erros.phone = "This not valid number phone format!";
    }
    return erros;
  }

  useEffect(() => {
    //campos validados
    if (Object.keys(formErros).length === 0) {
      //atualiza que foi validado
      props.setIsStepSubmitedValid(true);
    } else {
      //atualiza que não foi validado
      props.setIsStepSubmitedValid(false);
    }
  }, [formErros]);

  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className="form__Group">
        {formErros.name ? (
          <p className="form__Wrapper-Labels">
            <label htmlFor="name" className="form__Label">
              Name
            </label>
            <span className="form__Error" aria-live="polite">
              {formErros.name}
            </span>
          </p>
        ) : (
          <label htmlFor="name" className="form__Label">
            Name
          </label>
        )}
        <input
          type="text"
          className="form__Input"
          id="name"
          placeholder="e.g. Stephen King"
          value={initialValues.name}
          onChange={(event) => {
            props.updateFields({ name: event.target.value });
            setFormErros(
              validate({ name: event.target.value, email: props.datas.email, phone: props.datas.phone })
            );
          }}
          required
          min="3"
          title="Please enter with name"
        />
      </div>
      <div className="form__Group">
        {formErros.email ? (
          <p className="form__Wrapper-Labels">
            <label htmlFor="email" className="form__Label">
              Email Address
            </label>
            <span className="form__Error" aria-live="polite">
              {formErros.email}
            </span>
          </p>
        ) : (
          <label htmlFor="email" className="form__Label">
            Email Address
          </label>
        )}
        <input
          type="email"
          className="form__Input"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={initialValues.email}
          onChange={(event) => {
            props.updateFields({ email: event.target.value });
            setFormErros(
              validate({
                name: props.datas.name,
                email: event.target.value,
                phone: props.datas.phone,
              })
            );
          }}
          required
          title="Please enter with email addres with format e.g. stephenking@lorem.com"
        />
      </div>
      <div className="form__Group">
        {formErros.phone ? (
          <p className="form__Wrapper-Labels">
            <label htmlFor="phone" className="form__Label">
              Phone Number
            </label>
            <span className="form__Error" aria-live="polite">
              {formErros.phone}
            </span>
          </p>
        ) : (
          <label htmlFor="phone" className="form__Label">
            Phone Number
          </label>
        )}
        <input
          type="tel"
          className="form__Input"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={initialValues.phone}
          onChange={(event) => {
            props.updateFields({ phone: event.target.value });
            setFormErros(
              validate({
                name: props.datas.name,
                email: props.datas.email,
                phone: event.target.value,
              })
            );
          }}
          required
          min="13"
          pattern="[0-9]{1}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}"
          title="Please enter with number phone with format e.g. +1 234 567 890"
        />
      </div>
    </FormWrapper>
  );
}

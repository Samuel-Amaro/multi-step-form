import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import Label from "./Label";
import Input from "./Input";
import "./StepPersonalInfo.css";

export default function StepPersonalInfo(props) {
  const emailRegexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegexpExp =
    /\d{10,15}/; /*/[0-9]{1}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}[\s]{1}[0-9]{3}/*/
  const phoneRegexExpAttribute = `\\d{1,15}`; /*`[0-9]{1}[\\s]{1}[0-9]{3}[\\s]{1}[0-9]{3}[\\s]{1}[0-9]{3}`*/
  const initialValues = {
    name: props.datas.name,
    email: props.datas.email,
    phone: props.datas.phone,
  };
  const [formErros, setFormErros] = useState({});

  function validate(valuesFields) {
    const erros = {};
    //se o campo for vazio
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

  function handleInputChange(event) {
    const fieldsValues = {
      [event.target.name]: event.target.value,
    };
    props.updateFields({ [event.target.name]: event.target.value });
    const fields = ["name", "email", "phone"].filter((field) => {
      return field !== event.target.name;
    });
    for (const key in props.datas) {
      if (fields.includes(key)) {
        Object.defineProperty(fieldsValues, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: props.datas[key],
        });
      }
    }
    setFormErros(validate(fieldsValues));
  }

  useEffect(() => {
    if (Object.keys(formErros).length === 0) {
      props.setIsStepSubmitedValid(true);
    } else {
      props.setIsStepSubmitedValid(false);
    }
  }, [formErros]);

  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
      personalInfo={true}
    >
      <div className="form-group">
        {formErros.name ? (
          <p className="form-group__wrapper-labels">
            <Label for="name" className="form-group__label">
              Name
            </Label>
            <span className="form-group__error" aria-live="polite">
              {formErros.name}
            </span>
          </p>
        ) : (
          <Label for="name" className="form-group__label">
            Name
          </Label>
        )}
        <Input
          className={
            formErros.name
              ? "form-group__input form-group__input--invalid"
              : "form-group__input"
          }
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          value={initialValues.name}
          onHandle={handleInputChange}
          required={true}
          min="3"
          pattern={undefined}
          title="Please enter with name"
          checked={undefined}
          onKeyDown={undefined}
        />
      </div>
      <div className="form-group">
        {formErros.email ? (
          <p className="form-group__wrapper-labels">
            <Label for="email" className="form-group__label">
              Email Address
            </Label>
            <span className="form-group__error" aria-live="polite">
              {formErros.email}
            </span>
          </p>
        ) : (
          <Label for="email" className="form-group__label">
            Email Address
          </Label>
        )}
        <Input
          className={
            formErros.email
              ? "form-group__input form-group__input--invalid"
              : "form-group__input"
          }
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={initialValues.email}
          onHandle={handleInputChange}
          required={true}
          min={undefined}
          pattern={undefined}
          title="Please enter with email addres with format e.g. stephenking@lorem.com"
          checked={undefined}
          onKeyDown={undefined}
        />
      </div>
      <div className="form-group">
        {formErros.phone ? (
          <p className="form-group__wrapper-labels">
            <Label for="phone" className="form-group__label">
              Phone Number
            </Label>
            <span className="form-group__error" aria-live="polite">
              {formErros.phone}
            </span>
          </p>
        ) : (
          <Label for="phone" className="form-group__label">
            Phone Number
          </Label>
        )}
        <Input
          className={
            formErros.phone
              ? "form-group__input form-group__input--invalid"
              : "form-group__input"
          }
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={initialValues.phone}
          onHandle={handleInputChange}
          required={true}
          min="10"
          max="15"
          pattern={phoneRegexExpAttribute}
          title="Please type with formatted phone number, for example +1 234 567 890 without white spaces, only numbers. with min 10 numbers and max 15 numbers"
          checked={undefined}
          onKeyDown={undefined}
        />
      </div>
    </FormWrapper>
  );
}

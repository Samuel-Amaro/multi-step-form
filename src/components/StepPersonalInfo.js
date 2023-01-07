import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import Label from "./Label";

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

  //TODO: COMPONENTE INPUT PRECISANDO TERMINAR
  //TODO: COMPONENTE LABEL PENSAR EM MODIFICADORES, E NO INPUT TAMBÉM, UTILIZA O CLASS NAMES PACKAGE PARA CRIAR AS CLASS MODIFICADORE DINAMICAS, CRIA UM UNICO COMPNENTE LABEL E INPUT E USAR APLICANDO MODIFICADORES

  function validate(/*valuesFields*/ field, value) {
    const erros = {};
    //se o campo for vazio
    switch (field) {
      case "name":
        if (!value.trim()) {
          erros.name = "This field is required";
        }
        break;
      case "email":
        if (!value.trim()) {
          erros.email = "This field is required";
        } else if (!emailRegexExp.test(value)) {
          erros.email = "This not valid email format!";
        }
        break;
      case "phone":
        if (!value.trim()) {
          erros.phone = "This field is required";
        } else if (!phoneRegexpExp.test(value)) {
          erros.phone = "This not valid number phone format!";
        }
        break;
      default:
        break;
    }
    /*if (!valuesFields.name.trim()) {
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
    */
    return erros;
  }

  function handleInputChange(event) {
    props.updateFields({ [event.target.name]: event.target.value });
    setFormErros(
      validate(
        /*{
          [event.target.name]: event.target.value
        }*/ event.target.name,
        event.target.value
      )
    );
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
      <div className="form-group">
        {formErros.name ? (
          <p className="form-group__wrapper-labels">
            <Label for="name">Name</Label>
            {/*<label htmlFor="name" className="form-group__label">
              Name
            </label>*/}
            <span className="form-group__error" aria-live="polite">
              {formErros.name}
            </span>
          </p>
        ) : (
          <Label for="name">Name</Label>
          /*<label htmlFor="name" className="form-group__label">
            Name
          </label>
          */
        )}
        <input
          type="text"
          className="form-group__input"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          value={initialValues.name}
          onChange={(event) => {
            /*props.updateFields({ name: event.target.value });
            setFormErros(
              validate({
                name: event.target.value,
                email: props.datas.email,
                phone: props.datas.phone,
              })
            );
            */
            handleInputChange(event);
          }}
          required
          min="3"
          title="Please enter with name"
        />
      </div>
      <div className="form-group">
        {formErros.email ? (
          <p className="form-group__wrapper-labels">
            <Label for="email">Email Address</Label>
            {/*<label htmlFor="email" className="form-group__label">
              Email Address
            </label>
            */}
            <span className="form-group__error" aria-live="polite">
              {formErros.email}
            </span>
          </p>
        ) : (
          <Label for="email">
            Email Address
          </Label> /*<label htmlFor="email" className="form-group__label">
            Email Address
          </label>*/
        )}
        <input
          type="email"
          className="form-group__input"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={initialValues.email}
          onChange={(event) => {
            /*props.updateFields({ email: event.target.value });
            setFormErros(
              validate({
                name: props.datas.name,
                email: event.target.value,
                phone: props.datas.phone,
              })
            );
            */
            handleInputChange(event);
          }}
          required
          title="Please enter with email addres with format e.g. stephenking@lorem.com"
        />
      </div>
      <div className="form-group">
        {formErros.phone ? (
          <p className="form-group__wrapper-labels">
            <Label for="phone">Phone Number</Label>
            {/*
            <label htmlFor="phone" className="form-group__label">
              Phone Number
            </label>
            */}
            <span className="form-group__error" aria-live="polite">
              {formErros.phone}
            </span>
          </p>
        ) : (
          <Label for="phone">Phone Number</Label>
          /*<label htmlFor="phone" className="form-group__label">
            Phone Number
          </label>
          */
        )}
        <input
          type="tel"
          className="form-group__input"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={initialValues.phone}
          onChange={(event) => {
            /*props.updateFields({ phone: event.target.value });
            setFormErros(
              validate({
                name: props.datas.name,
                email: props.datas.email,
                phone: event.target.value,
              })
            );
            */
            handleInputChange(event);
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

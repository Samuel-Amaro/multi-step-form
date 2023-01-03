import FormWrapper from "./FormWrapper";

export default function StepPersonalInfo(props) {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <p className="form__Group">
        <label htmlFor="name" className="form__Label">
          Name
        </label>
        <input
          type="text"
          className="form__Input"
          id="name"
          placeholder="e.g. Stephen King"
          value={props.datas.name}
          onChange={(event) => {
            props.setDatas((d) => {
              return { ...d, ...{ name: event.target.value } };
            });
          }}
          required
          min="3"
          title="Please enter with name"
        />
      </p>
      <p className="form__Group">
        <label htmlFor="email" className="form__Label">
          Email Address
        </label>
        <input
          type="email"
          className="form__Input"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={props.datas.email}
          onChange={(event) => {
            props.setDatas((e) => {
              return { ...e, ...{ email: event.target.value } };
            });
          }}
          required
          title="Please enter with email addres with format e.g. stephenking@lorem.com"
        />
      </p>
      <p className="form__Group">
        <label htmlFor="phone" className="form__Label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form__Input"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={props.datas.phone}
          onChange={(event) => {
            props.setDatas((p) => {
              return { ...p, ...{ phone: event.target.value } };
            });
          }}
          required
          pattern="[0-9]{1}[\s]{1}[0-9]{3}[\s]{1}[0-9][\s]{1}[0-9]{3}"
          title="Please enter with number phone with format e.g. +1 234 567 890"
        />
      </p>
    </FormWrapper>
  );
}

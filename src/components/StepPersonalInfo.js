export default function StepPersonalInfo() {
  return (
    <>
      <p className="form__Group">
        <label htmlFor="name" className="form__Label">
          Name
        </label>
        <input
          type="text"
          className="form__Input"
          id="name"
          placeholder="e.g. Stephen King"
          required
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
          required
        />
      </p>
      <p className="form__Group">
        <label htmlFor="phone" className="form__Label">
          Phone Number
        </label>
        <input
          type="number"
          className="form__Input"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          required
        />
      </p>
    </>
  );
}

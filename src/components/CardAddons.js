
export default function CardAddons(props) {
  const nameAttributerHTML = props.name.toLowerCase().split(" ").join("-");
  const strFormatTimePlan =
    props.planSelectedTime.toLowerCase() === "monthly" ? "mo" : "yr";
  const calcPrice =
    strFormatTimePlan === "mo" ? props.price : parseInt(props.price) * 10;
  return (
    <div className="form__Card-Addons">
      <input
        type="checkbox"
        className="form__Input"
        id={nameAttributerHTML}
        name={nameAttributerHTML}
        value={props.name.toLowerCase()}
        aria-labelledby={`description-${nameAttributerHTML}`}
      />
      <p className="form__Container-Description-Addons">
        <label className="form__Label" htmlFor={nameAttributerHTML}>
          {props.name}
        </label>
        <span
          className="form__Description"
          id={`description-${nameAttributerHTML}`}
        >
          {props.description}
        </span>
      </p>
      <p className="form__Price-Addons">
        +${calcPrice}/{strFormatTimePlan}
      </p>
    </div>
  );
}
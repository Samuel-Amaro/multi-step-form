export default function CardPlan(props) {
  const strFormatTimePlan = props.planSelectedTime.toLowerCase() === "monthly" ? "mo" : "yr";
  const calcPrice = strFormatTimePlan === "mo" ? props.price : parseInt(props.price) * 10;
  return (
    <div className="Card-Plan">
      <img
        aria-hidden="true"
        alt=""
        className="card-plan__Icon-Ilustration"
        src={props.src}
      />
      <div>
        <h5 className="card-plan__Name-Plan">{props.namePlan}</h5>
        <p className="card-plan__price">{`$${calcPrice}/${strFormatTimePlan}`}</p>
        {strFormatTimePlan === "yr" && (
          <p className="card-plan__Alert-Prom">2 months free</p>
        )}
      </div>
    </div>
  );
}

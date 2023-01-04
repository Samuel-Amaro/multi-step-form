
function calcPrice(timePlan, price, factorMultiply) {
  if(timePlan.toLowerCase() === "monthly") {
    return price;
  }
  return price * factorMultiply;
}

export default function CardPlan(props) {
  const strFormatTimePlan =
    props.planTimeSelected.toLowerCase() === "monthly" ? "mo" : "yr";
  return (
    <div
      className={
        props.isSelected ? "Card-Plan card-plan--selected" : "Card-Plan"
      }
      onPointerDown={(event) => {
        props.updateFields({
          plan: {
            name: props.namePlan,
            price: calcPrice(
              props.planTimeSelected,
              props.price,
              props.factorMultiply
            ),
            timePlan: props.planTimeSelected,
          },
        });
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          props.updateFields({
            plan: {
              name: props.namePlan,
              price: calcPrice(
                props.planTimeSelected,
                props.price,
                props.factorMultiply
              ),
              timePlan: props.planTimeSelected,
            },
          });
        }
      }}
      tabIndex="0"
    >
      <img
        aria-hidden="true"
        alt=""
        className="card-plan__Icon-Ilustration"
        src={props.src}
      />
      <div>
        <h5 className="card-plan__Name-Plan">{props.namePlan}</h5>
        <p className="card-plan__price">{`$${calcPrice(
          props.planTimeSelected,
          props.price,
          props.factorMultiply
        )}/${strFormatTimePlan}`}</p>
        {strFormatTimePlan === "yr" && (
          <p className="card-plan__Alert-Prom">2 months free</p>
        )}
      </div>
    </div>
  );
}

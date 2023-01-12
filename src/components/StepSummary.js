import FormWrapper from "./FormWrapper";
import Button from "./Button";
import "./StepSummary.css";

function getTotal(plan, addOns) {
    const initialValue = 0;
    let total = 0;
    if(addOns.length > 0) {
        total += addOns.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);
    }
    return total + plan.price;
}

function capitalizeFirstLetterStr(string) {
  return string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().substring(1);
}

export default function StepSummary(props) {
  const timeFormatStr =
    props.datas.plan.timePlan.toLowerCase() === "monthly" ? "mo" : "yr";
  const timeFormatTotal =
    props.datas.plan.timePlan.toLowerCase() === "monthly" ? "month" : "year";
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
      summary={true}
    >
      <div className="summary">
        <div className="summary__container">
          <div className="summary__plan">
            <div className="summary__wrapper">
              <p className="summary__description-plan">{`${capitalizeFirstLetterStr(
                props.datas.plan.name
              )}(${capitalizeFirstLetterStr(props.datas.plan.timePlan)})`}</p>
              <Button
                className="summary__btn-change"
                type="button"
                label="Change Plan"
                title="Change Plan"
                onHandle={(event) => {
                  props.goTo(1);
                }}
              >
                Change
              </Button>
              {/*<button
                type="button"
                className="summary__btn-change"
                aria-label="Change Plan"
                title="Change Plan"
                onPointerDown={(event) => {
                  props.goTo(1);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    props.goTo(1);
                  }
                }}
              >
                Change
              </button>*/}
            </div>
            <p className="summary__price-Plan">{`$${props.datas.plan.price}/${timeFormatStr}`}</p>
          </div>
          <hr className="summary__line-diviser" />
          {props.datas.addOns.length > 0 && (
            <div className="summary__addons">
              {props.datas.addOns.map((a, index) => {
                return (
                  <p className="addons-description" key={index}>
                    <span className="addons-description__name">
                      {capitalizeFirstLetterStr(a.name)}
                    </span>
                    <span className="addons-description__price">{`+$${a.price}/${timeFormatStr}`}</span>
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="total">
          <p className="total__wrapper">
            <span className="total__description">{`Total (per ${timeFormatTotal})`}</span>
            <span className="total__price">{`+$${getTotal(
              props.datas.plan,
              props.datas.addOns
            )}/${timeFormatStr}`}</span>
          </p>
        </div>
      </div>
    </FormWrapper>
  );
}

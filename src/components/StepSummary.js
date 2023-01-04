import FormWrapper from "./FormWrapper";

function getTotal(plan, addOns) {
    const initialValue = 0;
    let total = 0;
    if(addOns.length > 0) {
        total += addOns.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);
    }
    return total + plan.price;
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
    >
      <div className="form__Summary-Wrapper">
        <div className="form__Summary-Container">
          <div className="form__Summary-Plan">
            <div className="form__Wrapper">
              <p className="form__Plan">{`${props.datas.plan.name}(${props.datas.plan.timePlan})`}</p>
              <button
                type="button"
                className="form__btn form__Btn--Change"
                aria-label="Change Plan"
                title="Change Plan"
                onPointerDown={(event) => {
                  props.goTo(1);
                }}
                onKeyDown={(event) => {
                  if(event.key === "Enter") {
                    props.goTo(1);
                  }
                }}
              >
                Change
              </button>
            </div>
            <p className="form__Price-Plan">{`$${props.datas.plan.price}/${timeFormatStr}`}</p>
          </div>
          <hr className="form__Line-Diviser" />
          {props.datas.addOns.length > 0 && (
            <div className="form__Summary-Addons">
              {props.datas.addOns.map((a, index) => {
                return (
                  <p className="form__Addons-Wrapper" key={index}>
                    <span className="form__Name-Addons">{a.name}</span>
                    <span className="form__Price-Addons">{`+${a.price}/${timeFormatStr}`}</span>
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="form__Summary-Total">
          <p className="form__Total-Wrapper">
            <span className="form__Price-Time-Total">{`Total (per ${timeFormatTotal})`}</span>
            <span className="form__Price-Total">{`+$${getTotal(props.datas.plan, props.datas.addOns)}/${timeFormatStr}`}</span>
          </p>
        </div>
      </div>
    </FormWrapper>
  );
}

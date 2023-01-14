import "./FormWrapper.css";
import classNames from "classnames";

export default function FormWrapper(props) {
    const classes = classNames("form-wrapper", props.className, {
      "form-wrapper--step-personal": props.personalInfo,
      "form-wrapper--step-plan": props.plan,
      "form-wrapper--step-addons": props.addOns,
      "form-wrapper--step-summary": props.summary,
      "form-wrapper--step-plan-yearly": props.planYearly
    });
    return (
      <section className={classes}>
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
        {
            props.children
        }
      </section>
    );
}
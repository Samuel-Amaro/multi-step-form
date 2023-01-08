import "./StepIndicator.css";

export default function StepIndicator(props) {
    return (
      <div className="step-indicator">
        <span
          className={
            props.isSelected
              ? "step-indicator__number step-indicator__number--active"
              : "step-indicator__number"
          }
        >
          {props.number}
        </span>
        <div className="step-indicator__container">
          <span className="step-indicator__step">{props.info}</span>
          <span className="step-indicator__description">{props.summary}</span>
        </div>
      </div>
    );
}
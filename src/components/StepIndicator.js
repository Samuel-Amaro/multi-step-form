
export default function StepIndicator(props) {
    return (
      <div className="sidebar__Side-Step">
        <span className="sidebar__Number-Step">{props.number}</span>
        <div className="sidebar__Container">
          <span className="sidebar__Info-Step">{props.info}</span>
          <span className="sidebar__Summary-Step">{props.summary}</span>
        </div>
      </div>
    );
}
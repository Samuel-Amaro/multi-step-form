import classNames from "classnames";
import "./Label.css";

export default function Label(props) {
  const classes = classNames("label", props.className);
  return (
    <label className={classes} htmlFor={props.for}>
      {props.children}
    </label>
  );
}

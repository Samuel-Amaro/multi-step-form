import classNames from "classnames";

export default function Label(props) {
  const classes = classNames("label", props.className);
  return (
    <label className={classes} htmlFor={props.for}>
      {props.children}
    </label>
  );
}

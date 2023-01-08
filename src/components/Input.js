import classNames from "classnames";

export default function Input({className, type, id, name, placeholder, value, onHandle, required, min, pattern, title, checked}) {
    const classes = classNames('input', className);
    return (
      <input
        className={classes}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onHandle(event);
        }}
        required={required}
        min={min}
        pattern={pattern}
        title={title}
        checked={checked}
      />
    );
}
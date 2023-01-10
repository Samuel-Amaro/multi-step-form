import classNames from "classnames";
import "./Button.css";

export default function Button(props) {
    const classes = classNames('button', props.className, {
        'button--next': props.next,
        'button--confirm': props.confirm,
        'button--goback': props.goBack
    });

    return (
        <button className={classes} type={props.type} aria-label={props.label} title={props.label} onPointerDown={props.onHandle ? (event) => props.onHandle(event) : undefined} onKeyDown={(event) => {
            if(event.key === "Enter") {
                props.onHandle(event);
            }
        }}>{props.children}</button>
    );
}

import classNames from "classnames";

export default function Button(props) {
    const classes = classNames('button', props.className, {
        'button--next': props.next,
        'button--confirm': props.confirm
    });

    return (
        <button className={classes} type={props.type} aria-label={props.label} title={props.label} onPointerDown={(event) => props.onHandle(event)} onKeyDown={(event) => {
            if(event.key === "Enter") {
                props.onHandle(event);
            }
        }}>{props.children}</button>
    );
}

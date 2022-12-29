
export default function  Button(props) {
    return (
        <button type={props.type} className={props.class} aria-label={props.label}>{props.text}</button>
    );
}
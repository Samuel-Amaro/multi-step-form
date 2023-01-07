
export default function Label(props) {
    return (
        <label className="label" htmlFor={props.for}>{props.children}</label>
    );
}
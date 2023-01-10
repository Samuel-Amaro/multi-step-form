import "./FormWrapper.css";
import classNames from "classnames";

export default function FormWrapper(props) {
    const classes = classNames("form-wrapper", props.className);
    return (
      /*<></>*/
      <section className={classes}>
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
        {
            props.children
        }
      </section>
    );
}
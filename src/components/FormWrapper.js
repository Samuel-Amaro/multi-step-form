
export default function FormWrapper(props) {
    return (
      <>
        <h1 className="form__Title">{props.title}</h1>
        <p className="form__Description">{props.description}</p>
        {
            props.children
        }
      </>
    );
}
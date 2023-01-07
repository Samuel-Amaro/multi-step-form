
export default function FormWrapper(props) {
    return (
      <>
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
        {
            props.children
        }
      </>
    );
}
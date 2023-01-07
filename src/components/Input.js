export default function Input({type, id, placeholder, value, onHandle, required, min, pattern, title}) {
    return(
        <input className="input" type={type} id={id} placeholder={placeholder} value={value} onChange={(event) => {
            onHandle();
        }} required={required} min={min} pattern={pattern} title={title}/>
    );
}
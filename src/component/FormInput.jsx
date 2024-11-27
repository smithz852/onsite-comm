export default function FormInput({id, label, inputType, value, name}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={inputType} name={name} value={value}/>
    </>
  )
}
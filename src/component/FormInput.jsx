export default function FormInput({id, label, inputType, value, name}) {
  return (
    <>
      <label htmlFor={id} style={{textAlign: 'left'}}>{label}</label>
      <input type={inputType} name={name} value={value}/>
    </>
  )
}
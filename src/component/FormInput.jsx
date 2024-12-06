export default function FormInput({id, label, inputType, value, name}) {
  return (
    <>
    
      <label htmlFor={id} style={{
        textAlign: 'left',
        fontSize: '15pt'
        }}>{label}</label>

      {inputType !== 'checkbox' && <textarea type={inputType} name={name} value={value} style={{
        overflowWrap: 'break-word'
      }}/>}
      {inputType === 'checkbox' && <input type={inputType} name={name} value={value} style={{
        width: '15px',
        height: '15px'
      }}/>}
    </>
  )
}
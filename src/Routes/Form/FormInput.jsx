import '../Form/FormInput.css'
import React from 'react'


const FormInput = (props) => {
  return (
    <div className='forminput'>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type={props.type}/>
    </div>
  )
}

export default FormInput
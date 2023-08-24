import '../Form/FormInput.css'
import React from 'react'

const CostumSelect = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };
  return (
    <div className='forminput'>
      <label>{props.label}</label>
      <select onChange={handleChange}>
        <option>Adrar</option>
        <option>Chlef</option>
        <option>Aghouat</option>
        <option>Oum bouaghi</option>
        <option>Batna</option>
        <option>Biskra</option>
        <option>Bashar</option>
        <option>Blida</option>
        <option>Bouira</option>
        <option>Tamenraset</option>
      </select>
    </div>
    
  )
}

export default CostumSelect

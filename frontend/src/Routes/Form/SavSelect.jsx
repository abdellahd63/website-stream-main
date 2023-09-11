import '../Form/style/FormInput.css'
import React from 'react'

const SavSelect = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };
  return (
    <div className='forminput'>
      <label>{props.label}</label>
      <select onChange={handleChange}>
      <option value="BATNA">BATNA</option>
        <option value="GUELMA">GUELMA</option>
        <option value="JIJEL">JIJEL</option>
        <option value="BEJAÏA">BEJAÏA</option>
        <option value="OUM EL-BOUAGHI">OUM EL-BOUAGHI</option>

      </select>
    </div>
    
  )
}

export default SavSelect

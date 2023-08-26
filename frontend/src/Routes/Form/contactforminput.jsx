import React from 'react'
import './style/contactinput.css'

const Contactforminput = (props) => {
  return (
    <div className='contactinput'>
      //verification
        <label>{props.label}</label>
        <input placeholder={props.placeholder} type={props.type} width={props.width} />
    </div>
  )
}

export default Contactforminput
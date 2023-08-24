import React from 'react'
import './Styles/contact.css'
import FormInput from './Form/FormInput'

export default function Contact (){
  return (
    <div className='Contact-page'>
       <h2>Contactez nous</h2>
        <p>Contactez-nous dès aujourd'hui et nous serons ravis de traiter votre demande</p>

        <div className='contact-form'>
          <div className=''>
          
            <FormInput label='Nom complet:' placeholder=' Entrer votre nom' type='text'/>
            <FormInput label='Email:' placeholder=' Entrer votre Email' type='email'/>
            <FormInput label='N tel:' placeholder=' Entrer votre numero' type='number'/>
          </div> 
           <div className='description'>
            <label>Description</label>
            <input placeholder='Décrivez votre problème en au moins 250 caractères' maxLength={250} type='text'/>

          </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Styles/contact.css'
import Contactforminput from './Form/Contactforminput'

export default function Contact (){
  return (
    <div className='Contact-page'>
       <h2>Contactez nous</h2>
        <p>Contactez-nous dès aujourd'hui et nous serons ravis de traiter votre demande</p>

        <div className='contact-form'>
          <div className='first-section'>
            <Contactforminput label='Nom complet:' placeholder=' Entrer votre nom' type='text' width='50VH'/>
            <Contactforminput label='Email:' placeholder=' Entrer votre Email' type='email' width='50VH'/>
            <Contactforminput label='N tel:' placeholder=' Entrer votre numero' type='number' width='50VH'/>
          </div> 
           <div className='second-section'>
            <label>Message:</label>
           <textarea  placeholder=' Entrer votre message' type='text' width='max-content'>

           </textarea>
          </div>

          <div className="buttons-area">

                    <button id='cancel_button' type='button'>Annuler</button>
                    <button id='submit_button' type='submit'>Envoyer</button>
          </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import './Styles/contact.css'
import Contactforminput from './Form/Contactforminput'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact (){
  const notifyFailed = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);
  const [FullName, setNom] = useState('');
  const [fromAddress, setEmail] = useState('');
  const [EmailDescription, setEmailDescription] = useState('');
  const [PhoneNumber, setTelephone] = useState('');
  const handleFullNameInputChange = (newValue) => {
    setNom(newValue);
  };
  const handlefromAddressInputChange = (newValue) => {
      setEmail(newValue);
  };
  const handlePhoneNumberInputChange = (newValue) => {
      setTelephone(newValue);
  };

  async function handleSendEmail(e) {
    e.preventDefault();
    const reponse = await fetch("http://localhost:8000/EmailSender", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          FullName,
          fromAddress,
          EmailDescription,
          PhoneNumber,
        }),
      });
  
      const json = await reponse.json();
      if (!reponse.ok) {
        notifyFailed(json.message);
      }
      if (reponse.ok) {
        notifySuccess(json.message);
      }
  };
  function handleCanceled(){
    setNom('');
    setEmail('');
    setEmailDescription('');
    setTelephone('');
  }
  return (
    <div className='Contact-page'>
       <h2>Contactez nous</h2>
        <p>Contactez-nous dès aujourd'hui et nous serons ravis de traiter votre demande</p>

        <div className='contact-form'>
          <div className='first-section'>
            <Contactforminput onChange={handleFullNameInputChange} label='Nom complet:' value= {FullName} placeholder=' Entrer votre nom' type='text' width='50VH'/>
            <Contactforminput onChange={handlefromAddressInputChange} label='Email:' value={fromAddress} placeholder=' Entrer votre Email' type='email' width='50VH'/>
            <Contactforminput onChange={handlePhoneNumberInputChange} label='N tel:' value={PhoneNumber} placeholder=' Entrer votre numero' type='number' width='50VH'/>
          </div> 
           <div className='second-section'>
            <label>Message:</label>
           <textarea onChange={e => (setEmailDescription(e.target.value))} value={EmailDescription}  placeholder=' Entrer votre message' type='text' width='max-content'>
           </textarea>
          </div>

          <div className="buttons-area">
            <button id='cancel_button' type='button' onClick={handleCanceled}>Annuler</button>
            <button id='submit_button' type='submit' onClick={handleSendEmail}>Envoyer</button>
          </div>
        </div>
        <ToastContainer /> 
    </div>
  )
}

import React, { useState } from 'react'
import './Styles/OpenTicket.css'
import FormInput from './Form/FormInput'
import CostumSelect from './Form/CostumSelect'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Openticket = () => {
    const notifyFailed = (message) => toast.error(message);
    const notifySuccess = (message) => toast.success(message);
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [Email, setEmail] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [ReferanceProduit, setReferanceProduit] = useState('');
    const [TypePanne, setTypePanne] = useState('');
    const [Wilaya, setWilaya] = useState('');
    const [CentreDepot, setCentreDepot] = useState('');
    const [DateDepot, setDateDepot] = useState('');

    const handleNomInputChange = (newValue) => {
        setNom(newValue);
    };
    const handlePrenomInputChange = (newValue) => {
        setPrenom(newValue);
    };
    const handleEmailInputChange = (newValue) => {
        setEmail(newValue);
    };
    const handleTelephoneInputChange = (newValue) => {
        setTelephone(newValue);
    };
    const handleReferanceProduitInputChange = (newValue) => {
        setReferanceProduit(newValue);
    };
    const handleTypePanneInputChange = (newValue) => {
        setTypePanne(newValue);
    };
    const handleWilayaInputChange = (newValue) => {
        setWilaya(newValue);
    };
    const handleCentreDepotInputChange = (newValue) => {
        setCentreDepot(newValue);
    };
    const handleDateDepotInputChange = (newValue) => {
        setDateDepot(newValue);
    };
    const [pannes, setPannes] = useState([]);
    async function handleCreateNewPanne(e) {
        e.preventDefault();
        const reponse = await fetch("http://localhost:8000/Pannes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
                Nom, Prenom, Email, Telephone, 
                ReferanceProduit, TypePanne, Wilaya, 
                CentreDepot, DateDepot
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
  return (
    <div className='form'>
        
        <h2>Ouvrir un ticket</h2>
        <p>Veuillez remplir ce formulaire</p>
        <form onSubmit={handleCreateNewPanne}>
            <div className='left-form'>
                <FormInput label='Nom :' placeholder=' Entrer votre nom' type='text' onChange={handleNomInputChange}/>
                <FormInput label='Prenom :' placeholder=' Entrer votre prenom' type='text' onChange={handlePrenomInputChange}/>
                <FormInput label='Email :' placeholder=' Entrer votre Email' type='text' onChange={handleEmailInputChange}/>
                <FormInput label='N°= Tel :' placeholder=' Entrer votre numero telephone' type='number' onChange={handleTelephoneInputChange}/>
                <FormInput label='Referance produit :' placeholder=' Entrer la referance de votre produit' type='text' onChange={handleReferanceProduitInputChange}/>  
            </div>
            <div className='right-form'>
                <FormInput label='Type de panne :' placeholder=' Entrer le type de panne' type='text' onChange={handleTypePanneInputChange}/>
                <CostumSelect label='Wilaya :' onChange={handleWilayaInputChange}/>
                <FormInput label='Centre De Depot :' placeholder=' Entrer votre centre de depot' type='text' onChange={handleCentreDepotInputChange}/>
                <FormInput label='Date de depot :' placeholder=' Entrer votre date de depot' type='date' onChange={handleDateDepotInputChange}/>     
                <div className='button-section'>
                    <button id='cancel_button' type='button'>Annuler</button>
                    <button id='submit_button' type='submit'>Valider</button>
                </div>
            </div> 
            
        </form>
        <ToastContainer />
    </div>
  )
}

export default Openticket
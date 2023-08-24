import React from 'react'
import './Styles/OpenTicket.css'
import FormInput from './Form/FormInput'
import CostumSelect from './Form/CostumSelect'


const wilaya=['Adrar','Chelf','Aghouat','Oum bouagi','Batna','Bejaia','Biskra','Bashar','Blida','Bouira',
'Tamenraset','Tebessa','Telmcane','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijle','Setif','Saaida']


const Openticket = () => {
  return (
    <div className='form'>
        <h2>Ouvrir un ticket</h2>
        <p>Veuillez remplir ce formulaire</p>
        <form>
            <div className='left-form'>
                <FormInput label='Nom :' placeholder=' Entrer votre nom' type='text'/>
                <FormInput label='Prenom :' placeholder=' Entrer votre prenom' type='text'/>
                <FormInput label='Email :' placeholder=' Entrer votre Email' type='email'/>
                <FormInput label='N°= Tel :' placeholder=' Entrer votre numero telephone' type='number'/>
                <FormInput label='Referance produit :' placeholder=' Entrer la referance de votre produit' type='text'/>  
            </div>
            <div className='right-form'>
                <FormInput label='Type de panne :' placeholder=' Entrer le type de panne' type='text'/>
                <CostumSelect label='Wilaya :' />
                <FormInput label='Centre De Depot :' placeholder=' Entrer votre centre de depot' type='text'/>
                <FormInput label='Date de depot :' placeholder=' Entrer votre date de depot' type='date'/>     
                <div className='button-section'>
                    <button id='cancel_button' type='cancel'>Annuler</button>
                    <button id='submit_button' type='submit'>Valider</button>
                </div>
            </div> 
        </form>
    </div>
  )
}

export default Openticket
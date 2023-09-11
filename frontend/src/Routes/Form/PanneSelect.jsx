import '../Form/style/FormInput.css'
import React from 'react'

const PanneSelect = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };
  return (
    <div className='forminput'>
      <label>{props.label}</label>
      <select onChange={handleChange}>
      <option value="Fiche mal placée">Fiche mal placée</option>
        <option value="NDP">NDP</option>
        <option value="Standby">Standby</option>
        <option value="Ecran noir">Ecran noir</option>
        <option value="Ecran blanc">Ecran blanc</option>
        <option value="Pas d’affichage">Pas d’affichage</option>
        <option value="Mosaique">Mosaique</option>
        <option value="Pb d’image">Pb d’image</option>
        <option value="Trait vertical">Trait vertical</option>
        <option value="Trait horizontal">Trait horizontal</option>
        <option value="Tâche noire">Tâche noire</option>
        <option value="Bande vertical">Bande vertical</option>
        <option value="Bande horizontal">Bande horizontal</option>
        <option value="Bande noire">Bande noire</option>
        <option value="Pixel">Pixel</option>
        <option value="Particules">Particules</option>
        <option value="Dalle cassée">Dalle cassée</option>
        <option value="Pb de réceptrice IR">Pb de réceptrice IR</option>
        <option value="Pb de clavier">Pb de clavier</option>
        <option value="Pb de TLC">Pb de TLC</option>
        <option value="Blocage logo">Blocage logo</option>
        <option value="Blocage menu">Blocage menu</option>
        <option value="Pb de son">Pb de son</option>
        <option value="Bruit de son">Bruit de son</option>
        <option value="Arrêt après chauffe">Arrêt après chauffe</option>
        <option value="Standby après chauffe">Standby après chauffe</option>
        <option value="Ecran noir après chauffe">Ecran noir après chauffe</option>
        <option value="Pb Android">Pb Android</option>
        <option value="Problème HDMI, RCA, Tuner, USB">Problème HDMI, RCA, Tuner, USB</option>
        <option value="Blocage">Blocage</option>
        <option value="Pb baffe">Pb baffe</option>
        <option value="Pb HP">Pb HP</option>
        <option value="Pb de bouton ON/OFF">Pb de bouton ON/OFF</option>
        <option value="Pb réseau">Pb réseau</option>
        <option value="Pb Wifi">Pb Wifi</option>
        <option value="Pb application (YouTube, PlayStore, ….)">Pb application (YouTube, PlayStore, ….)</option>
        <option value="Sur chauffe">Sur chauffe</option>
        <option value="Pb connecteur">Pb connecteur</option>

      </select>
    </div>
    
  )
}

export default PanneSelect

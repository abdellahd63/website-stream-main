import '../Form/style/FormInput.css'
import React, { useEffect, useState } from 'react'

const CostumSelect = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };
  const [Willaya, setWillaya] = useState([]);
  useEffect(() => {
    const fetchWillayaData = async () => {
      try {
        const response = await fetch('http://localhost:8000/Willaya', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setWillaya(data);
        } else {
          console.error("Error receiving Panne data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Panne data:", error);
      }
    };
  
    fetchWillayaData();
  }, [Willaya]);
  return (
    <div className='forminput'>
      <label>{props.label}</label>
      <select onChange={handleChange}>
        <option value=''>Sélectionné votre willaya</option>
        {Willaya.map((willaya) => (
            <option key={willaya?.id} value={willaya?.Nom}>
                {willaya?.Nom}
            </option>
        ))}     
      </select>
    </div>
    
  )
}

export default CostumSelect

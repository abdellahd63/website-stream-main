import '../Form/style/FormInput.css'
import React, { useEffect, useState } from 'react'

const SavSelect = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };
  const [SAV, setSAV] = useState([]);
  const [Agent, setAgent] = useState([]);

  useEffect(() => {
    const fetchSAVData = async () => {
      try {
        const response = await fetch('http://localhost:8000/SAV', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setSAV(data);
        } else {
          console.error("Error receiving Panne data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Panne data:", error);
      }
    };
  
    fetchSAVData();
  }, [SAV]);
  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await fetch('http://localhost:8000/Agent', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setAgent(data);
        } else {
          console.error("Error receiving Panne data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Panne data:", error);
      }
    };
  
    fetchAgentData();
  }, [Agent]);
  return (
    <div className='forminput'>
      <label>{props.label}</label>
      <select onChange={handleChange}>
        <option value=''>
            Sélectionné le centre de depot
        </option>
        {SAV.map((sav) => (
          <option key={sav?.id} value={sav?.Region}>
              {sav?.Region}
          </option>
        ))}      
        {Agent.map((agent) => (
          <option key={agent?.id} value={agent?.Region}>
            {agent?.Region}
          </option>
        ))}    

      </select>
    </div>
    
  )
}

export default SavSelect

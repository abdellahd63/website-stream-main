import React from 'react'
import './Styles/servicesstyle.css'
import locationicon from './assets/Images/locationicon.png'


export default function Service() {
  return (
    <div className='Service-page-content'>
        <h2>Service Apres Vente</h2>
        <p>Découvrez la liste des différents points SAV que Stream met à la disposition de ses Clients</p>
        <section className='cards'>
          <div className='section-title'>
            <h4>SAV International</h4> 
          </div>
          <div className='cards-section'>
            <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>
            </div>
            <div class="info">
              <h5>Portugal</h5>
              <span>LetMeRepair Spain Sucursal Portugal Parque Industrial do Cotai Av. Salgueiro Maia n 1025 Armazem 5, Aboboda</span>
              <hr/>
              <h6>+351 211 309 453</h6>
            </div>
          </div>  
          <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>
            </div>
            <div class="info">
              <h5>Espqgne</h5>
              <span>C/Conrado del Campo, Nave 4, Pol. Ind. Trevenez, 29590, Malaga (Malaga)</span>
              <hr/>
              <h6>+34 952 179 479</h6>
            </div>
          </div>
          <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>
            </div>
            <div class="info">
              <h5>Italy</h5>
              <span>inspeedy S.R.L via lodovico settala 3 20124 Milano (MI) - IT</span>
              <hr/>
              <h6>+39 199 240 668</h6>
            </div>
          </div>
          </div>
        </section>
        <section className='cards'>
          <div className='section-title'>            
            <h4>SAV Local</h4>            
          </div>
          <div className='cards-section'>
            <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>             
            </div>
            <div class="info">
              <h5>Hamiz</h5>
              <span>Lotissement Friri N 3, groupe C N 16 El Hamiz</span>
              <hr/>
              <h6>+213 (0)560 98 57 76 / 023 86 77 32</h6>
            </div>
          </div>  
          <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>              
            </div>
            <div class="info">
              <h5>Oran</h5>
              <span>Hai EL AMIRE ABDELKADER N : 01- BIR EL Djir-Oran</span>
              <hr/>
              <h6>+213 (0) 560 01 91 04</h6>
            </div>
          </div> 
          <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>              
            </div>
            <div class="info">
              <h5>Tizi Ouzou</h5>
              <span>Residence Iziri GB 17 BLV Krim Belkacem local N 133 ( en face CASNOS)</span>
              <hr/>
              <h6>+213 (0) 560 98 57 85</h6>
            </div>
          </div>
          <div className="card">
            <div className="icon-section">
              <div className='icon'>
                <img src={locationicon}/>
              </div>             
            </div>
            <div class="info">
              <h5>Medea</h5>
              <span>Cite Takebou 150 BT D Wilaya de Medea</span>
              <hr/>
              <h6>+213 (0)560 50 83 07</h6>
            </div>
          </div> 
          </div>           
        </section>       
    </div>
  )
}


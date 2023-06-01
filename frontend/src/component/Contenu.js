import React from 'react'
import "../component css/contenu.css";
import data from '../data/contenu.json'
import contenu from '../image/contenu.jpg'

function Contenu() {
  return (
    <div id='contenu' className='contenu'>
    <div className='conten'>
        <h3>Contenu de la formation</h3>
            <ul className="conten-list">
             {  data.map((e,i)=> <li>{e.Nomdomaine}</li>)}
            </ul>
    </div>
    <div className='conten-img'>
      <img src={contenu} />
    </div>
    </div>
  )
}

export default Contenu
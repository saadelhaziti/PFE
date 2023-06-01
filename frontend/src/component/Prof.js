import React from 'react'
import '../component css/prof.css'
import img from '../image/icon.jpg'

function Prof() {
  return (
    <div className='prof-container'>

      <div className='prof'>
        <div className='prof-img'>
          <img src={img}></img>
        </div>
        <div className='prof-desc'>
          <div>BRAHIM ELABOUDI</div>
          <a>brahim.elaboudi@uit.ac.ma</a>
        </div>
      </div>
      <div className='prof prof-p2'>
        <div className='prof-img'>
          <img src={img}></img>
        </div>
        <div className='prof-desc'>
          <div>SAAD EL HAZITI</div>
          <a>saad.elhaziti@uit.ac.ma</a>
        </div>
      </div>
    </div>
  )
}

export default Prof
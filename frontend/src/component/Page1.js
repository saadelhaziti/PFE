import React from 'react'
import img from "../image/presence.png"
import img2 from "../image/prof2.png"
import img3 from "../image/projet.png"


import '../component css/page1.css'

function Page1() {
    return (
        <div className='p1'>
            <div className='p1-title'><h4>Savoir.Savoir-faire.</h4></div>
            <div className='p1-desc'>Avec LUS compléter vos étude en haut niveau.</div>
            <div className='p1-info'>
                <div className='p1-card'>
                    <img src={img}></img>
                    <h4>Apprenez presentiellement</h4>
                    <div>Accédez à votre formation 100% présentiel dans la faculté.</div>
                </div>
                <div className='p1-card'>
                    <img src={img2}></img>
                    <h4>Un professeur  pour vous encadrer</h4>
                    <div>Bénéficiez chaque jours  des conseils d'un expert du métier qui vous aide à progresser tout au long de votre formation.</div>
                </div>
                <div className='p1-card'>
                    <img src={img3}></img>
                    <h4>Travaillez sur des projets</h4>
                    <div>Réalisez des projets concrets, issus de scénarios métiers, directement applicables en entreprise et enfin un stage .</div>
                </div>
            </div>
        </div>
    )
}

export default Page1
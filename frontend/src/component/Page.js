import React, { useContext } from 'react'
import '../component css/page.css'
import pp from '../image/p7.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContex'

function Page() {
    const authContex = useContext(AuthContext)
    return (
        <div className="p">
            <div className='p-txt'>
                <h4>Licence Universitaire Spécialisée :</h4>
                <h2 className='p-titre'>Ingénierie de Big Data et intelligence artificielle</h2>
                <div className="p-button">
                    <Link>Afficher la formation</Link>
                    {!authContex.auth.authenticated && <Link to="/register"> Préinscription</Link>}
                </div>
            </div>
            <div className='p-image'>
                <img src={pp} alt="" />
            </div>
        </div>
    )
}

export default Page
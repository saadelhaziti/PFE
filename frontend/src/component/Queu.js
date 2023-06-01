import React from "react";
import "../component css/queu.css"
import { Link } from "react-router-dom";
import fsk from '../image/fsk-white.png'
const Queu = () => {
    return (
        <div id='contact' className="Queu">
            <div className="">
             
                <img src={fsk} />
            </div>
            <div className="contactez-nous">
                <h4> Contactez-nous</h4>
                <p>+212 523 48 51 12/22</p>
                <p> <a href="mailto:said.tekatek@uit.ac.ma">said.tekatek@uit.ac.ma</a></p>
                <p>Campus Universitaire<br />
                    Kénitra<br />
                    BP 133<br />
                    Maroc</p>
            </div>
            <div className="Acc-rapide">
                <h4>Accès rapide</h4>
                <p><a href='#acceuil'>Acceuil</a ></p>
                <p><a href="https://fs.uit.ac.ma/" target="blank" >Espace facultaire</a></p>
            </div>
        </div>
    )
}

export default Queu;
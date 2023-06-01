import React from 'react'
import './home.css'

import Page from '.././component/Page';
import Navbar from '.././component/Navbar';
import Page1 from '.././component/Page1';
import Apropos from '.././component/Apropos';
import Info from '.././component/Info';
import Progress from '.././component/Progress';
import Prof from '.././component/Prof';
import Contenu from '.././component/Contenu';
import Queu from '.././component/Queu';


function Home() {
    return (
        <div className='Home'>
            <header id="acceuil" className="home-header ">
                <Navbar />
                <Page />
            </header>
            <section  className='home-section'>
                <Page1 />
                <Apropos />
                <div className='section2'>
                    <Progress /> 
                    <Prof />
                </div>
                <Contenu />
                <Info />
         
            </section>
            <footer className='home-footer'>
                <Queu />
            </footer>
        </div>
    )
}

export default Home
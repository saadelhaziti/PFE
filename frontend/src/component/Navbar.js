import React, { useContext, useEffect, useState } from 'react'
import "../component css/navbar.css";
import logo from '../image/logo.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

import { AuthContext } from '../AuthContex';

function Navbar() {
  //pour faire une animation au moment ou on scroll
  const [ISscroll, setscroll] = useState(false);
  //list open & close
  const [menu, setmenu] = useState("ai-icons-menu")
  const [etat, setetat] = useState('open')

  //pour utiliser context api
  const authContex = useContext(AuthContext);
  const handleOut = () => { authContex.logout() }


  const toggleMenuClose = () => {
    setmenu("ai-icons-close");
    setetat('nav-ele')
  }
  const toggleMenuOpen = () => {
    setmenu("ai-icons-menu");
    setetat('open')
  }

  useEffect((() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setscroll(true)
      }
      else { setscroll(false) }
    }
    document.addEventListener("scroll", handleScroll);
  }), [])
  return (

    <div className={`nav ${ISscroll ? "sticky" : ""}`}>
      <div className="nav-icon">
        <a><img src={logo} /></a>
      </div>
      <div className='ll'>

        <div className={` nav-ele ${etat} `} >
          <ul>
            <li><a href='#acceuil'>Acceuil</a ></li>
            <li><a href='#apropos'>A propos</a  ></li>
            <li><a href='#contenu'>Contenu</a ></li>
            <li><a href='#inforamtion'>Inforamtion</a ></li>
            <li><a href='#contact'>Contact</a ></li>
          </ul>
          <div className="nav-button">
            {authContex.auth.authenticated === true ?
              //il faut ajouter un button pour acceder a l'inforamtion
              <div className='nav-auth'>
                <Link to="/user" className="login-link btn ">Acceder</Link>
                <button className='btn btn-light' onClick={handleOut}>LOGOUT</button>
              </div>
              :
              <NavLink to='login' className={`btn ${ISscroll ? "scrollBtn text-light" : ""}`}>Se connecter</NavLink>
            }</div>
        </div>
      </div>
      <div className={`ai-icons`}>
        {menu === "ai-icons-menu" ? <div className="ai-icons-menu" onClick={toggleMenuClose}><AiOutlineMenu /></div> :
          <div className="ai-icons-close" onClick={toggleMenuOpen}><AiOutlineClose /></div>}
      </div>
    </div>

  )
}

export default Navbar

/* 
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={isSticky ? 'sticky' : ''}>
    
*/
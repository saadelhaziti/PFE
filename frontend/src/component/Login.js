import React, { useContext, useEffect, useState } from 'react';
import '../component css/login.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContex';

const loginUser = async (daata) => {
    const response = await fetch("http://127.0.0.1:8000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(daata)
    });
    return await response.json();
}


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //pour utilier authcontext du store
    const authContex = useContext(AuthContext);
//si on devra connecter on deplace a un autre page
    const navigate=useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({ email, password });
        localStorage.setItem('response',JSON.stringify(response));
        authContex.setAuth(response);
        console.log(response);
    };
    useEffect(() => {
        console.log(localStorage)
      },);
    return (
        //pour verifier si l'op de login est bien passé
        authContex.auth.authenticated?
        navigate('/User',{replace:true})
        :
        <div className="login-container">{
            <div className="login-card">
                <h1 className="login-title">Connexion</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-input-group">
                        <label className="login-label" htmlFor="email">
                            Adresse email
                        </label>
                        <input
                            className="login-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-group">
                        <label className="login-label" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            className="login-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {authContex.auth.authenticated === false &&
                        <p className='msg-error'>Désolé, votre email ou  mot de passe est incorrect.
                            Veuillez vérifier votre mot de passe.</p>}
                    <button className="login-button" type="submit">
                        Se connecter
                    </button>
                </form>
                <div className="login-links">
                    <Link to="/" className="login-link">Accueil</Link>
                    <Link to="/register" className="login-link">Inscription</Link>
                </div>
            </div>
                    }
        </div>
    );
}



export default Login




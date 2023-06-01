import React, { useState } from "react";
import '../component css/register.css'
import { Link } from "react-router-dom";

const RegUser = async (daata) => {
  const response = await fetch("", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(daata)
  });
  return await response.json();
}

function Register() {
  const [name, setName] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [adresse, setAdresse] = useState("");
  const [specialiteBac, setSpecialiteBac] = useState("");
  const [anneeObtentionBac, setAnneeObtentionBac] = useState("");
  const [mentionBac, setMentionBac] = useState("");
  const [diplomeObtenu, setDiplomeObtenu] = useState("");
  const [specialiteDiplome, setSpecialiteDiplome] = useState("");
  const [anneeObtentionDiplome, setAnneeObtentionDiplome] = useState("");
  const [mentionDiplome, setMentionDiplome] = useState("");
  const [cne, setcne] = useState("");
  const [cni, setcni] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await RegUser({
      name, prenom, email, password, confirmPassword,
      dateNaissance, adresse, specialiteBac, anneeObtentionBac, mentionBac, diplomeObtenu,
      specialiteDiplome, anneeObtentionDiplome, mentionDiplome,cni,cne
    });
    console.log(response);
    if (password === confirmPassword) {
      alert(`Merci ${name} ${prenom} de vous être inscrit !`);
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Inscription</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-input-group">
            <label className="register-label" htmlFor="name">
              Nom
            </label>
            <input
              className="register-input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="surname">
              Prénom
            </label>
            <input
              className="register-input"
              type="text"
              id="surname"
              value={prenom}
              onChange={(e) => setprenom(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="cne">
              CNE
            </label>
            <input
              className="register-input"
              type="text"
              id="cne"
              value={cne}
              onChange={(e) => setcne(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="CNI">
              CNI
            </label>
            <input
              className="register-input"
              type="text"
              id="CNI"
              value={cni}
              onChange={(e) => setcni(e.target.value)}
              required
            />
          </div>



          <div className="register-input-group">
            <label className="register-label" htmlFor="email">
              Adresse email
            </label>
            <input
              className="register-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="register-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="confirmPassword">
              Confirmer le mot de passe
            </label>
            <input
              className="register-input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>



          <div className="register-input-group">
            <label className="register-label" htmlFor="dateNaissance">
              Date de naissance
            </label>
            <input
              className="register-input"
              type="date"
              id="dateNaissance"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="adresse">
              Adresse
            </label>
            <input
              className="register-input"
              type="text"
              id="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="specialiteBac">
              Spécialité de Bac
            </label>
            <input
              className="register-input"
              type="text"
              id="specialiteBac"
              value={specialiteBac}
              onChange={(e) => setSpecialiteBac(e.target.value)}
              required
            />
          </div>
          <div className="register-input-group">
            <label className="register-label" htmlFor="anneeObtentionBac">
              Année d'obtention de Bac
            </label>
            <input
              className="register-input"
              type="number"
              id="anneeObtentionBac"
              value={anneeObtentionBac}
              onChange={(e) => setAnneeObtentionBac(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label className="register-label" htmlFor="mentionBac">
              Mention de Bac
            </label>
            <select
              className="register-input"
              id="mentionBac"
              value={mentionBac}
              onChange={(e) => setMentionBac(e.target.value)}
              required
            >
              <option value="">Choisissez une mention</option>
              <option value="Très bien">Très bien</option>
              <option value="Bien">Bien</option>
              <option value="Assez bien">Assez bien</option>
              <option value="Passable">Passable</option>
            </select>
          </div>

          <div className="register-input-group">
            <label className="register-label" htmlFor="diplomeObtenu">
              Diplôme obtenu
            </label>
            <input
              className="register-input"
              type="text"
              id="diplomeObtenu"
              value={diplomeObtenu}
              onChange={(e) => setDiplomeObtenu(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label className="register-label" htmlFor="specialiteDiplome">
              Spécialité de diplôme
            </label>
            <input
              className="register-input"
              type="text"
              id="specialiteDiplome"
              value={specialiteDiplome}
              onChange={(e) => setSpecialiteDiplome(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label className="register-label" htmlFor="anneeObtentionDiplome">
              Année d'obtention de diplôme
            </label>
            <input
              className="register-input"
              type="number"
              id="anneeObtentionDiplome"
              value={anneeObtentionDiplome}
              onChange={(e) => setAnneeObtentionDiplome(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label className="register-label" htmlFor="mentionDiplome">
              Mention de diplôme
            </label>
            <select
              className="register-input"
              id="mentionDiplome"
              value={mentionDiplome}
              onChange={(e) => setMentionDiplome(e.target.value)}
              required
            >
              <option value="">Choisissez une mention</option>
              <option value="Très bien">Très bien</option>
              <option value="Bien">Bien</option>
              <option value="Assez bien">Assez bien</option>
              <option value="Passable">Passable</option>
            </select>
          </div>


          <button className="register-button" type="submit">
            S'inscrire
          </button>
        </form>
        <div className="register-links">
          <Link to="/" className="register-link">Accueil</Link>
          <Link to="/login" className="register-link">Connexion</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
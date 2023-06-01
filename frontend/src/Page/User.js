import React, { useContext } from 'react'
import { AuthContext } from '../AuthContex'
import { Link } from 'react-router-dom';
import './user.css'

function User() {
  const authContex = useContext(AuthContext);
  const handleOut = () => { authContex.logout() }
  return (
    <div>
      <div className='user-nav'>

      <Link to="/" className="register-link btn btn-success">Accueil</Link>
      <button className='btn btn-primary' onClick={handleOut}>LOGOUT</button>
      {authContex.auth.prof &&
        <div className='btn btn-light'>
          <a href='http://127.0.0.1:8000/admin/' target="_blank">connexion pour l'administrateur</a>
        </div>
      }
      </div>
      {!authContex.auth.prof && <div className='user-text'>
      <p>welcome {authContex.auth.name + " " + authContex.auth.prenom}</p>
      <p>Vous avez été acceptés pour l'information AI&BI</p>
      </div>}
      {authContex.auth.prof && <div className='user-text'>
      <p>Bonjour  Professeur{" " +authContex.auth.name + " " + authContex.auth.prenom}</p>
      <p> Vous avez maintenant accès à votre plateforme d'information.</p>
      </div>}
    </div>
  )
}

export default User
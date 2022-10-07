// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';

// == Component
function ProfilForm() {
  return (
    <div className="profil-form">
      <div className="profil-form-container">
          <div className="profil-form-element">
            <form className="profil-form--form">
              <div className="field">
              <label 
                htmlFor="#"
                className="field-label"
              >
                Pseudo :
              </label>
              <p className="field-info-username">
                Mon Pseudo
              </p>
              <label 
                htmlFor="#"
                className="field-label"
              >
                Adresse mail :
              </label>
              <p className="field-info-email">
                pseudo@user.com
              </p>
              <label 
                htmlFor="#"
                className="field-label"
              >
                Mot de passe :
              </label>
              <p className="field-info-password">
                ******************
              </p>
              <div className="profil-form-button">
                <div className="profil-form-button--left">
                  <NavLink
                    to="/mon-compte/edit"
                    type="submit"
                    style={{fontFamily: 'arial'}}
                  >
                    MODIFIER MON PROFIL
                  </NavLink>
                </div>
                <button
                  className="profil-form-button--right"
                  type="submit"
                >
                  SUPPRIMER MON COMPTE
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

// == Export
export default ProfilForm;

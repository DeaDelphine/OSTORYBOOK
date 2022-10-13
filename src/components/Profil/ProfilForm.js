// == Import
import { NavLink } from 'react-router-dom';

import PropTypes from "prop-types";

import './styles.scss';

// == Component
function ProfilForm({
  username,
}) {
  
  return (
    <div className="profil-form">
      <div className="profil-form-container">
          <div className="profil-form-element">
            <form className="profil-form--form">
              <div className="user-info">
              <p className="user-info-username">
              Mon Profil
              </p>
              <p className="user-info-username">
              {username}
              </p>
              <p className="user-info-email">
                pseudo@user.com
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
                  style={{fontFamily: 'arial'}}
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

ProfilForm.propTypes = {
  username: PropTypes.string.isRequired,
}

// == Export
export default ProfilForm;

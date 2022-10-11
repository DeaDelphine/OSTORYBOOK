// == Import
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../Profil/styles.scss';

// == Component
function MyProfil({ email, nickname, roles }) {
  return (
    <div className="profil-form">
      <div className="profil-form-container">
        <div className="profil-form-element">
          <form className="profil-form--form">
            <div className="field">
              <p className="field-info-username">
                Mon Profil
              </p>
              <p className="field-info-email">
                Bienvenue  {nickname}
              </p>
              <p className="field-info-email">
                {email}
              </p>
              <p className="field-info-email">
                {roles}
              </p>
              <div className="profil-form-button">
                <div className="profil-form-button--left">
                  <NavLink
                    to="/mon-compte/edit"
                    type="submit"
                    style={{ fontFamily: 'arial' }}
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
MyProfil.propTypes = {
  email: PropTypes.string,
  nickname: PropTypes.string,
  roles: PropTypes.array,
};

MyProfil.defaultProps = {
  email: '',
  nickname: '',
  roles: '',

};
// == Export
export default MyProfil;

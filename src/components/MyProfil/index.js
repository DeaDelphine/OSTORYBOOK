// == Import
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../Profil/styles.scss';

function linkToBackOffice() {
  // 👇️ redirect to external URL
  window.location.href = 'http://localhost:8000/login';

  return null;
}
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
                {roles == 'ROLE_ADMIN' && (
                <div className="profil-form-button--left">
                  <NavLink
                    to="/"
                    onClick={linkToBackOffice}
                    style={{ fontFamily: 'arial' }}
                  >
                    ACCEDER AU BACK-OFFICE
                  </NavLink>
                </div>
                )}
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

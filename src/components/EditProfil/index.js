// == Import
import PropTypes from 'prop-types';
import '../Profil/styles.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FieldProfil from '../FieldProfil';

// == Component
function EditProfil({
  changeField,
}) {
  const emailValue = useSelector((state) => state.user.email);
  const nickname = useSelector((state) => state.user.nickname);
  const passwordValue = useSelector((state) => state.user.password);

  return (
    <div className="container">
      <div className="profil-form">
        <div className="profil-form-container">
          <h2 className="profil-form-title">MODIFIER MON PROFIL</h2>
          <div className="profil-form-element">
            <form className="profil-form--form">
              <div className="field">
                <FieldProfil
                  name="nickname"
                  placeholder="Pseudonyme"
                  onChange={changeField}
                  value={nickname}
                />
                <FieldProfil
                  name="email"
                  placeholder="Email"
                  onChange={changeField}
                  value={emailValue}
                />
                <FieldProfil
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                  value={passwordValue}
                  onChange={changeField}
                />
                <FieldProfil
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                  value={passwordValue}
                  onChange={changeField}
                />

                <div className="profil-form-button">
                  <button
                    className="profil-form-button--left"
                    type="submit"
                  >
                    VALIDER LES MODIFICATIONS
                  </button>
                  <button
                    className="profil-form-button--right"
                    type="submit"
                  >
                    SUPPRIMER MON COMPTE
                  </button>
                  <NavLink
                    to="/mon-compte"
                    className="container-button--return"
                    style={{ fontFamily: 'arial', display: 'flex', justifyContent: 'center' }}
                  >
                    Retour à mon profil
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
EditProfil.propTypes = {
  changeField: PropTypes.func.isRequired,
};

// == Export
export default EditProfil;

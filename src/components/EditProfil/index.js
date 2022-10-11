/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import '../Profil/styles.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Component
function EditProfil({ changeField, handleEdit, handleClear }) {
  const nickname = useSelector((state) => state.user.nickname);
  const email = useSelector((state) => state.user.email);

  // const handleSubmit1 = (evt) => {
  //   console.log(handleSubmit1);
  //   evt.preventDefault();
  //   handleEdit();

  // };
  // const handleSubmit2 = (evt) => {
  //   console.log(handleSubmit2);
  //   evt.preventDefault();
  //   handleClear();
  // };
  return (
    <div className="container">
      <div className="profil-form">
        <div className="profil-form-container">
          <h2 className="profil-form-title">MODIFIER MON PROFIL</h2>
          <div className="profil-form-element">
            <form className="profil-form--form">
              <div className="field">
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Pseudo :
                </label>
                <input
                  type="text"
                  className="field-input-text"
                  name="nickname"
                  placeholder={nickname}
                />
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Adresse mail :
                </label>
                <input
                  type="email"
                  className="field-input-email"
                  name="email"
                  placeholder={email}
                />
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Mot de passe :
                </label>
                <input
                  type="password"
                  className="field-input-password"
                  name="password"
                  placeholder="**********"
                />
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Confirmez le mot de passe :
                </label>
                <input
                  type="password"
                  className="field-input-password"
                  name="password"
                  placeholder="**********"
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
                </div>
              </div>
            </form>
          </div>
        </div>
        <NavLink
          to="/mon-compte"
          className="container-button--return"
          style={{ fontFamily: 'arial', display: 'flex', justifyContent: 'center' }}
        >
          Retour à mon profil
        </NavLink>
      </div>
    </div>
  );
}
EditProfil.propTypes = {
  changeField: PropTypes.func.isRequired,
};

// == Export
export default EditProfil;

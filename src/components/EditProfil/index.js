/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import '../Profil/styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser, userEdit } from '../../actions/user';
import FieldProfil from './FieldProfil';

// == Component
function EditProfil({ changeField }) {
  // we use the hook useSelector to get the parameters from the state
  const nickname = useSelector((state) => state.user.Newnickname);
  const email = useSelector((state) => state.user.Newemail);
  const newpassword = useSelector((state) => state.user.Newpassword);
  const oldpassword = useSelector((state) => state.user.Oldpassword);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  // we use preventDefault to avoid refresh page
  // Also the handlesubmit function is here for the form submit, then the useredit action is called
  // to edit form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(userEdit());
  };

  return (
    <div className="container">
      <div className="profil-form">
        <div className="profil-form-container">
          <h2 className="profil-form-title">MODIFIER MON PROFIL</h2>
          <div className="profil-form-element">
            <form
              className="profil-form--form"
              onSubmit={handleSubmit}
            >
              <div className="field">
                <label
                  className="field-left"
                >
                  Pseudo :
                </label>
                <FieldProfil
                  type="text"
                  name="newnickname"
                  value={nickname}
                  onChange={changeField}
                />

                <label
                  className="field-left"

                >
                  Adresse mail :
                </label>
                <FieldProfil
                  type="email"
                  name="newemail"
                  className="field-input-email"
                  value={email}
                  onChange={changeField}
                />

                <label
                  className="field-left"
                >
                  Mot de passe :
                </label>
                <FieldProfil
                  type="password"
                  name="oldpassword"
                  className="field-input-password"
                  placeholder="Mot de passe"
                  onChange={changeField}
                  value={oldpassword}
                />

                <label
                  className="field-left"

                >
                  Nouveau mot de passe :
                </label>
                <FieldProfil
                  type="password"
                  className="field-input-password"
                  name="newPassword"
                  placeholder="Nouveau mot de passe"
                  onChange={changeField}
                  value={newpassword}
                />

                <div className="profil-form-button">
                  <button
                    className="profil-form-button--left"
                    type="submit"

                  >
                    VALIDER LES MODIFICATIONS
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
  /**
   * this function is trigger when we add a new caracters into one of the fields
   * two parameters :
   * - new value taking into account the character entered
   * - id of the fields :  'email' or 'password'
   */
};

// == Export
export default EditProfil;

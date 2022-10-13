/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userEdit } from '../../actions/user';
import FieldProfil from './FieldProfil';

// == Component
function EditProfil({ changeField }) {
  // we use the hook useSelector to get the parameters from the state
  const nickname = useSelector((state) => state.user.Newnickname);
  const email = useSelector((state) => state.user.Newemail);
  const newpassword = useSelector((state) => state.user.Newpassword);
  const passwordcheck = useSelector((state) => state.user.passwordcheck);
  const errors = useSelector((state) => state.user.errors);
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const [isAlertMessageVisible, setIsAlertMessageVisible] = React.useState(false);
  const message = <div className="login-form-right-title">Les deux mots de passent doivent être identiques</div>;

  let showErrors = '';
  if (errors) {
    console.log(errors);
    switch (errors.status) {
      case 422:
        showErrors = Object.keys(errors.data).map((key) => <div className="login-form-right-title">{`${errors.data[key]}`}</div>);
        break;
      case 204:
        showErrors = <div className="login-form-right-title">Bravo ! Vos modifications sont bien prises en compte !</div>;
        break;
      default:
        showErrors = <div>''</div>;
        break;
    }
  }

  const handleVisibility = () => {
    setIsAlertVisible(false);
    setIsAlertMessageVisible(false);
  };

  const checkPassword = () => {
    if (newpassword && passwordcheck) {
      if (newpassword == passwordcheck) {
        return true;
      }
      setIsAlertMessageVisible(true);
      return false;
    }
    setIsAlertMessageVisible(true);
    return false;
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  // we use preventDefault to avoid refresh page
  // Also the handlesubmit function is here for the form submit, then the useredit action is called
  // to edit form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkPassword()) {
      setIsAlertMessageVisible(false);
      dispatch(userEdit());
      setIsAlertVisible(true);
    }
  };

  return (
    <div className="container-scrolly-mobile-only">
      <div className="profil-form">
        <div className="profil-form-container">
          {isAlertMessageVisible && message}
          {isAlertVisible && showErrors}
          <h1 className="profil-form-title">MODIFIER MON PROFIL</h1>
          <div className="profil-form-element">
            <form
              className="profil-form--form"
              onSubmit={handleSubmit}
              onBlur={handleVisibility}
            >
              <div className="field-container">
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
                    className="field-input-text"
                  />
                </div>
                <div className="field">
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
                </div>
                <div className="field">
                  <label
                    className="field-left"
                  >
                    Mot de passe :
                  </label>
                  <FieldProfil
                    type="password"
                    name="passwordcheck"
                    className="field-input-password"
                    placeholder="Mot de passe"
                    onChange={changeField}
                    value={passwordcheck}
                  />
                </div>
                <div className="field">
                  <label
                    className="field-left"
                  >
                    Confirmer votre mot de passe :
                  </label>
                  <FieldProfil
                    type="password"
                    className="field-input-password"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                    onChange={changeField}
                    value={newpassword}
                  />
                </div>
              </div>
              <div className="profil-form-button">
                <button
                  className="profil-form-button--left"
                  type="submit"
                >
                  VALIDER LES MODIFICATIONS
                </button>
                {/* <button
                  className="profil-form-button--right"
                  type="submit"
                >
                  SUPPRIMER MON COMPTE
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavLink
        to="/mon-compte"
        className="container-button--return"
      >
        Retour à mon profil
      </NavLink>
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

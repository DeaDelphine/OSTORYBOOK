/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import utils from '../../utils/function';

import { fetchAvatar, fetchUser, userEdit } from '../../actions/user';
import FieldProfil from './FieldProfil';

// == Component
function EditProfil({ changeField }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchAvatar());
  }, []);
  // we use the hook useSelector to get the parameters from the state
  const oldNickname = useSelector((state) => state.user.nickname);
  const nickname = useSelector((state) => state.user.Newnickname);

  const newpassword = useSelector((state) => state.user.Newpassword);
  const passwordcheck = useSelector((state) => state.user.passwordcheck);

  const oldEmail = useSelector((state) => state.user.email);
  const email = useSelector((state) => state.user.Newemail);
  const errors = useSelector((state) => state.user.errors);
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const [isAlertMessageVisible, setIsAlertMessageVisible] = React.useState(false);
  const message = <div className="login-form-right-title-error">Les deux mots de passent doivent être identiques</div>;
  const images = useSelector((state) => (state.user.image));
  const oldProfilePicture = useSelector((state) => (state.user.profilePicture));
  const [newProfilPicture, setProfilPicture] = React.useState(oldProfilePicture);
  const parsedName = oldProfilePicture.split('.');

  const changeAvatar = () => {
    fetch('http://0.0.0.0:8000/api/user/me/edit', {
      method: 'PATCH',
      headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({
        profilePicture: newProfilPicture,
      }),
    });
  };

  const handleChange = (evt) => {
    const optionValue = evt.target.value;
    document.getElementById('id_img').src = `http://0.0.0.0:8000/assets/images/personnages/${optionValue}`;
    setProfilPicture(optionValue);
  };

  const handleVisibility = () => {
    setTimeout(() => {
      setIsAlertVisible(false);
      setIsAlertMessageVisible(false);
    }, 1000);
  };

  let showError = '';

  if (errors) {
    showError = utils.errorMessage(errors);
  }

  // we use preventDefault to avoid refresh page
  // Also the handlesubmit function is here for the form submit, then the useredit action is called
  // to edit form
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (utils.checkPassword(newpassword, passwordcheck)) {
      setTimeout(() => {
        setIsAlertMessageVisible(false);
        dispatch(userEdit());
        changeAvatar();
        setIsAlertVisible(true);
      }, 420);
    }
  };

  return (
    <div className="container-scrolly">
      <div className="container-scrolly-mobile-only">

        <div className="profil-form">
          <div className="profil-form-container">

            {isAlertMessageVisible && message}
            {isAlertVisible && showError}

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
                    {/* this composant is use for a better controlled of the fields we need to check if
                   the name is exacly the same as in the reducer associated */}
                    <FieldProfil
                      type="text"
                      name="newnickname"
                      value={nickname}
                      onChange={changeField}
                      className="field-input-text"
                      placeholder={oldNickname}
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
                      value={email}
                      className="field-input-email"
                      onChange={changeField}
                      placeholder={oldEmail}
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
                  <div className="field">
                    <label
                      className="field-left"
                    >
                      Choisissez votre Avatar
                    </label>

                    <select
                      name="image"
                      onChange={handleChange}
                      className="field-input"
                      widht
                    >
                      <option selected="<selected" value={newProfilPicture}>{parsedName[0]}</option>
                      {images.map((image) => (
                        <option
                          value={image.image}
                          key={image.id}
                        > {image.name}
                        </option>
                      ))}
                    </select>

                    <img
                      src={`http://0.0.0.0:8000/assets/images/personnages/${oldProfilePicture}`}
                      id="id_img"
                      alt={`${parsedName[0]}`}
                      height="100px"
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
                </div>
              </form>
            </div>
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

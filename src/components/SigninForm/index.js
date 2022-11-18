import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import utils from '../../utils/function';

import Field from '../Field';

import '../Login/styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function SigninForm({
  changeField,
  handleSignin,
}) {
  const email = useSelector((state) => state.auth.email);
  const nicknameValue = useSelector((state) => state.auth.nickname);
  const passwordValue = useSelector((state) => state.auth.password);
  const passwordCheckValue = useSelector((state) => state.auth.passwordcheck);
  const errors = useSelector((state) => state.auth.errors);
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const [isAlertMessageVisible, setIsAlertMessageVisible] = React.useState(false);
  const message = <div className="login-form-right-title-error">Les deux mots de passent doivent être identiques</div>;

  let showError = '';
  if (errors) {
    showError = utils.errorMessage(errors);
  }

  const handleVisibility = () => {
    setIsAlertVisible(false);
  };

  useEffect(() => {
    setIsAlertVisible(true);
  }, [errors]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (utils.checkPassword(passwordValue, passwordCheckValue)) {
      setIsAlertMessageVisible(false);
      handleSignin();
    }
    else {
      setIsAlertMessageVisible(true);
    }
  };

  return (
    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit} onBlur={handleVisibility}>
      <div className="login-form-left">
        <h2 className="login-form-left-title">INSCRIPTION</h2>
        {isAlertMessageVisible && message}
        {isAlertVisible && showError}

        <p className="login-form-left-message">Pas encore de compte ? Inscrivez-vous pour pouvoir jouer.</p>
        <div className="login-form-left-container">
          <Field
            name="email"
            placeholder="Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="nickname"
            placeholder="Pseudonyme"
            onChange={changeField}
            value={nicknameValue}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={passwordValue}
          />
          <Field
            name="passwordcheck"
            type="password"
            placeholder="Confirmez le mot de passe"
            onChange={changeField}
            value={passwordCheckValue}
          />
          <div className="login-form-button">
            <button
              type="submit"
              className="login-form-button--button"
              to="/histoires"
            >
              S'INSCRIRE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

SigninForm.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

// == Export
export default SigninForm;

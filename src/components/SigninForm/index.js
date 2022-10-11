import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
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
  const emailValue = useSelector((state) => state.user.email);
  const nicknameValue = useSelector((state) => state.user.nickname);
  const passwordValue = useSelector((state) => state.user.password);
  const passwordCheckValue = useSelector((state) => state.user.passwordcheck);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignin();
  };

  return (
    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
      <div className="login-form-left">
        <h2 className="login-form-left-title">INSCRIPTION</h2>
        <p className="login-form-left-message">Pas encore de compte ? Inscrivez-vous pour pouvoir jouer.</p>
        <div className="login-form-left-container">
          <Field
            name="email"
            placeholder="Email"
            onChange={changeField}
            value={emailValue}
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
              to="/"
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
  changeField: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
};

// == Export
export default SigninForm;

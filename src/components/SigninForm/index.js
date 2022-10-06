import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Field from './Field';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function SigninForm({
  email,
  nickname,
  password,
  changeField,
  handleLogin,
}) {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    navigate('/histoires');
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
            value={email}
          />
          <Field
            name="nickname"
            placeholder="Pseudonyme"
            onChange={changeField}
            value={nickname}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <Field
            name="password"
            type="password"
            placeholder="Confirmez le mot de passe"
            onChange={changeField}
            value={password}
          />
          <div className="login-form-button">
            <button
              type="submit"
              className="login-form-button--button"
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
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// == Export
export default SigninForm;

import PropTypes from 'prop-types';
import Field from './Field';

import { Link } from 'react-router-dom';

import '../styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function LoginForm({
  email,
  password,
  changeField,
  handleLogin,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <div className="login-form-right">
          <h2 className="login-form-right-title">CONNEXION</h2>
          <p className="login-form-right-message">Veuillez vous connecter pour jouer.</p>
          <div className="login-form-right-container">
            <Field
              name="email"
              placeholder="Email"
              onChange={changeField}
              value={email} />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              value={password} />
            <div className="login-form-button">
              <Link>
                Mot de passe oublié ?
              </Link>
              <button
                type="submit"
                className="login-form-button--button"
              >
                SE CONNECTER
              </button>
            </div>
          </div>
        </div>
      </form>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// == Export
export default LoginForm;

/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from './Field';

import '../styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function LoginForm({
  email,
  nickname,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <div className="login-form-container">
        {isLogged && (
          <div className="login-form-logged">
            <p className="login-form-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="login-form-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
        )}
        {!isLogged && (
          <div className="login-form-container--container">
            {/* <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}> */}
              {/* <div className="login-form-left">
                <h2 className="login-form-left-title">INSCRIPTION</h2>
                // eslint-disable-next-line max-len
                <p className="login-form-left-message">Pas encore de compte ? Inscrivez-vous pour pouvoir jouer.</p>
                <div className="login-form-left-container">
                  <Field
                    name={email}
                    placeholder="Email"
                    onChange={changeField}
                    value={email}
                  />
                  <Field
                    name={nickname}
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
            </form> */}
            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
              <div className="login-form-right">
                <h2 className="login-form-right-title">CONNEXION</h2>
                <p className="login-form-right-message">Veuillez vous connecter pour jouer.</p>
                <div className="login-form-right-container">
                  <Field
                    name="email"
                    placeholder="Email"
                    onChange={changeField}
                    value={email}
                  />
                  <Field
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={changeField}
                    value={password}
                  />
                  <div className="login-form-button">
                    <Link>
                      Mot de passe perdu
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
          </div>
        )}

      </div>
    </div>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default LoginForm;

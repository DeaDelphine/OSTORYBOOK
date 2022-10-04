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
  id,
  email,
  nickname,
  password,
  roles,
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
                <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                  <div className="login-form-left">
                  <h2 className="login-form-left-title">INSCRIPTION</h2>
                  <p className="login-form-left-message">Pas encore de compte ? Inscrivez-vous pour pouvoir jouer.</p>
                    <div className="login-form-left-container">
                      <Field
                        name="email"
                        placeholder="Email"
                        onChange={changeField}
                        value={email} />
                      <Field
                        name="nickname"
                        placeholder="Pseudonyme"
                        onChange={changeField}
                        value={nickname} />
                      <Field
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        onChange={changeField}
                        value={password} />
                      <Field
                        name="password"
                        type="password"
                        placeholder="Confirmez le mot de passe"
                        onChange={changeField}
                        value={password} />
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
                          <a
                            href={`$process.env.REACT_APP_SERVER_BACK}/reset-password`}
                            className="text-sm underline text-gray-100 hover:text-orange-300"
                          >
                            Mot de passe perdu
                          </a>
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
  /**
   * Traitement déclenché quand on saisit un caractère dans l'un des deux champs.
   * Deux paramètres :
   * - nouvelle valeur en prenant en compte le caractère saisi
   * - identifiant du champ, 'email' ou 'password'
   */
  changeField: PropTypes.func.isRequired,
  /**
   * Traitement déclenché quand on est en mode non connecté et qu'on clique sur le
   * bouton OK.
   * Pas de paramètre.
   */
  handleLogin: PropTypes.func.isRequired,
  /**
   * Traitement déclenché quand on est mode connecté et qu'on clique sur le bouton
   * de déconnexion.
   * Un paramètre : les infos de l'événement clic
   */
  handleLogout: PropTypes.func.isRequired,
  /** Choix entre le mode connecté (affichage d'un message) et le mode non connecté
   * (affichage du formulaire)
   */
  isLogged: PropTypes.bool,
  /** Message affiché à la place du formulaire quand on est en mode connecté */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default LoginForm;

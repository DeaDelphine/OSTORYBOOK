import PropTypes from 'prop-types';

import Field from './Field';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="container" >
      <div className="login-form">
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

          <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
            <Field
              name="email"
              placeholder="Adresse Email"
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
            <button
              type="submit"
              className="login-form-button"
            >
              OK
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  /** Contenu du champ e-mail */
  email: PropTypes.string.isRequired,
  /** Contenu du champ password */
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

export default LoginForm;

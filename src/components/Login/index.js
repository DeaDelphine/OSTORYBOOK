import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import { useSelector, useDispatch } from 'react-redux';

import { changeLoginField, logIn } from '../../actions/user';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
const Login = () => {

  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  console.log(emailValue);

  return (
    <div className="container">
      <LoginForm 
        email={emailValue}
        password={passwordValue}
        nickname=""
        isLogged={false}
        loggedMessage="Bienvenue"
        changeField={(newValue, identifier) => {
          console.log(`changeField, newValue=${newValue}, identifier=${identifier}`);
          // on veut aller enregistrer la nouvelle valeur dans le state
        }}
        handleLogin={(event) => {
          console.log('handleLogin', event);
        }}
        handleLogout={(event) => {
          console.log('handleLogout', event);
          // TODO pour se déconnecter il faudrait dispatch une action qui serait
          // traitée par le reducer user et qui mettrait logged à false dans le
          // state
        }}
      />
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
export default Login;

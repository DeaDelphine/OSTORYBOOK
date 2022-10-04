import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

import { changeLoginField, logIn } from '../../actions/user';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function Login() {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const loggedValue = useSelector((state) => state.user.logged);
  const nicknameValue = useSelector((state) => state.user.nickname);
  // console.log(emailValue);
  // console.log(passwordValue);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <LoginForm
        email={emailValue}
        password={passwordValue}
        isLogged={loggedValue}
        loggedMessage={`Bienvenue ${nicknameValue}`}
        changeField={(newValue, identifier) => {
          dispatch(changeLoginField(newValue, identifier));
        }}
        handleLogin={() => {
          dispatch(logIn());
        }}
        handleLogout={(event) => {
          console.log('handleLogout', event);
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

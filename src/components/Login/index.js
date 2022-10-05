import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

import { useSelector, useDispatch } from 'react-redux';

import { changeLoginField, logIn } from '../../actions/user';

import './styles.scss';


/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
const Login = ({
  handleLogout,
  isLogged,
  loggedMessage,
}) => {

  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const loggedValue = useSelector((state) => state.user.logged);
  const nicknameValue = useSelector((state) => state.user.nickname);
  console.log(emailValue);
  console.log(passwordValue);

  const dispatch = useDispatch();

  return (
    <div className="container">
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
              <SigninForm />
              <LoginForm 
                email={emailValue}
                password={passwordValue}
                isLogged={loggedValue}
                loggedMessage={`Bienvenue ${nicknameValue}`}
                changeField={(newValue, identifier) => {
                  // console.log(`changeField, newValue=${newValue}, identifier=${identifier}`);
                  // on veut aller enregistrer la nouvelle valeur dans le state
                  dispatch(changeLoginField(newValue, identifier));
                }}
                handleLogin={() => {
                  dispatch(logIn());
                }}
                handleLogout={(event) => {
                  console.log('handleLogout', event);
                  // TODO pour se déconnecter il faudrait dispatch une action qui serait
                  // traitée par le reducer user et qui mettrait logged à false dans le                    // state
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default Login;

/* eslint-disable no-lone-blocks */
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

import { changeLoginField, logIn } from '../../actions/user';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */

function Login({
  handleLogout,
  isLogged,
  loggedMessage,
}) {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const loggedValue = useSelector((state) => state.user.logged);
  const nicknameValue = useSelector((state) => state.user.nickname);
  // const patate = useSelector((state) => state.user);
  // console.log(patate);

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
              <LoginForm
                email={emailValue}
                password={passwordValue}
                nickname={nicknameValue}
                isLogged={loggedValue}
                loggedMessage={`Bienvenue ${nicknameValue}`}
                changeField={(newValue, identifier) => {
                  // console.log(`changeField, newValue=${newValue}, identifier=${identifier}`);
                  // on veut aller enregistrer la nouvelle valeur dans le state
                  dispatch(changeLoginField(newValue, identifier));
                  console.log(changeLoginField);
                }}
                handleLogin={() => {
                  dispatch(logIn());
                  console.log(logIn);
                }}
                handleLogout={(event) => {
                  console.log('handleLogout', event);
                }}
              />
              <SigninForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  loggedMessage: 'Connecté',
};

// == Export
export default Login;

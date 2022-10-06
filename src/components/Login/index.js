/* eslint-disable no-lone-blocks */

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from '../LoginForm';
import SigninForm from '../SigninForm';

import { useDispatch } from 'react-redux';

import { changeLoginField, logIn } from '../../actions/auth';
import { changeSigninField, signIn } from '../../actions/user';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */

function Login() {

  const isLogged = useSelector((state) => state.user.logged);
  const loggedMessage = useSelector((state) => state.user.loggedMessage);

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
            >
              Déconnexion
            </button>
          </div>
          )}
          {isLogged && <Navigate to="/histoires" replace /> }
          {!isLogged && (
            <div className="login-form-container--container">
              <LoginForm
                changeField={(newValue, identifier) => {
                  // console.log(`changeField, newValue=${newValue}, identifier=${identifier}`);
                  // on veut aller enregistrer la nouvelle valeur dans le state
                  dispatch(changeLoginField(newValue, identifier));
                }}
              />
              <SigninForm 
                changeField={(newValue, identifier) => {
                  // console.log(`changeField, newValue=${newValue}, identifier=${identifier}`);
                  // on veut aller enregistrer la nouvelle valeur dans le state
                  dispatch(changeSigninField(newValue, identifier));
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// == Export
export default Login;

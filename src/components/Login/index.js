/* eslint-disable no-lone-blocks */

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import SigninForm from '../SigninForm';

import './styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */

function Login() {
  const isLogged = useSelector((state) => state.login.logged);
  const loggedMessage = useSelector((state) => state.login.loggedMessage);
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
          {!isLogged && <Navigate to="/histoires" replace /> }
          {!isLogged && (
            <div className="login-form-container--container">
              <LoginForm />
              <SigninForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// == Export
export default Login;

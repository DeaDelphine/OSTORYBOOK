/* eslint-disable no-return-assign */
/* eslint-disable no-lone-blocks */

import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import SigninForm from '../SigninForm';

import {
  changeLoginField, changeSignField, logIn, SignIn,
} from '../../actions/auth';

import './styles.scss';

function Login() {
  const isLogged = useSelector((state) => state.auth.logged);

  const dispatch = useDispatch();

  return (
    <div className="container-scrolly-mobile-only">
      <div className="login-form">
        <div className="login-form-container">
          {/* we use isLogged variable to found if user is connected or not,
          in this case the user can navigate to storylist */}
          {isLogged && <Navigate to="/histoires" replace /> },
          {!isLogged && (
          <div className="login-form-container--container">
            <LoginForm
              changeField={(newValue, identifier) => {
                dispatch(changeLoginField(newValue, identifier));
              }}
              handleLogin={() => {
                dispatch(logIn());
              }}
            />
            <SigninForm
              changeField={(newValue, identify) => {
                dispatch(changeSignField(newValue, identify));
              }}
              handleSignin={() => {
                dispatch(SignIn());
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

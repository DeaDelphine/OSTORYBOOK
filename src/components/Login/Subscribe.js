// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Field from './Field';

function Subscribe({
  
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
            <div className="login-form-container--container">
              <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                <div className="login-form-left">
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
              </form>
              </div>
 
  );
  
export default Subscribe;

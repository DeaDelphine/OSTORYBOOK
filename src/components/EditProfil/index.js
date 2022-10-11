/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import '../Profil/styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchUser, userEdit } from '../../actions/user';

// == Component
function EditProfil({ changeField }) {
  const nickname = useSelector((state) => state.user.nickname);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="container">
      <div className="profil-form">
        <div className="profil-form-container">
          <h2 className="profil-form-title">MODIFIER MON PROFIL</h2>
          <div className="profil-form-element">
            <form className="profil-form--form">
              <div className="field">
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Pseudo :
                </label>
                <input
                  type="text"
                  className="field-input-text"
                  name="nickname"
                  defaultValue={nickname}
                />
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Adresse mail :
                </label>
                <input
                  type="email"
                  className="field-input-email"
                  name="email"
                  defaultValue={email}
                />
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Mot de passe :
                </label>
                <input
                  type="password"
                  className="field-input-password"
                  name="password"
                  placeholder="**********"
                />
                <label
                  className="field-left"
                  onChange={changeField}
                >
                  Confirmez le mot de passe :
                </label>
                <input
                  type="password"
                  className="field-input-password"
                  name="password"
                  placeholder="**********"
                />
                <div className="profil-form-button">
                  <button
                    className="profil-form-button--left"
                    type="submit"
                    onClick={(event) => {
                      dispatch(userEdit());
                    }}
                  >
                    VALIDER LES MODIFICATIONS
                  </button>
                  <button
                    className="profil-form-button--right"
                    type="submit"
                  >
                    SUPPRIMER MON COMPTE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <NavLink
          to="/mon-compte"
          className="container-button--return"
          style={{ fontFamily: 'arial', display: 'flex', justifyContent: 'center' }}
        >
          Retour à mon profil
        </NavLink>
      </div>
    </div>
  );
}
EditProfil.propTypes = {
  changeField: PropTypes.func.isRequired,
};

// == Export
export default EditProfil;

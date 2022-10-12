/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import '../Profil/styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  changeUserInput, clearUserInput, fetchUser,
} from '../../actions/user';
import FieldProfil from './FieldProfil';
import { deleteUser } from '../../actions/auth';

// == Component
function EditProfil() {
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
            <form
              className="profil-form--form"
            >
              <div className="field">
                <label
                  className="field-left"

                >
                  Pseudo :
                </label>
                <FieldProfil
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  defaultValue={nickname}
                />

                <label
                  className="field-left"

                >
                  Adresse mail :
                </label>
                <FieldProfil
                  type="email"
                  name="email"
                  className="field-input-email"
                  placeholder="Email"
                  defaultValue={email}
                />

                <label
                  className="field-left"

                >
                  Mot de passe :
                </label>
                <FieldProfil
                  type="password"
                  name="password"
                  className="field-input-password"
                  placeholder="Mot de passe"
                />

                <label
                  className="field-left"

                >
                  Confirmez le mot de passe :
                </label>
                <FieldProfil
                  type="password"
                  className="field-input-password"
                  name="newPassword"
                  placeholder="Nouveau mot de passe"
                />

                <div className="profil-form-button">
                  <button
                    className="profil-form-button--left"
                    type="submit"
                    onClick={(event) => {
                      dispatch(changeUserInput());
                    }}
                    to="/mon-compte"
                  >
                    VALIDER LES MODIFICATIONS
                  </button>
                  <button
                    className="profil-form-button--right"
                    type="submit"
                    onClick={(event) => {
                      dispatch(deleteUser());
                    }}
                    to="/"
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

// == Export
export default EditProfil;

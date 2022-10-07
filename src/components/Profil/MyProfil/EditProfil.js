// == Import
import './styles.scss';

// == Component
function EditProfil() {
  return (
    <div className="profil-form">
      <div className="profil-form-container">
        <h2 className="profil-form-title">MODIFIER MON PROFIL</h2>
        <div className="profil-form-element">
          <form className="profil-form--form">
            <div className="field">
              <label
                htmlFor="#"
                className="field-left"
              >
                Pseudo :
              </label>
              <input
                type="text"
                className="field-input-text"
                name="nickname"
                placeholder="Pseudonyme"
              />
              <label
                htmlFor="#"
                className="field-left"
              >
                Adresse mail :
              </label>
              <input
                type="email"
                className="field-input-email"
                name="email"
                placeholder="Email"
              />
              <label
                htmlFor="#"
                className="field-left"
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
                htmlFor="#"
                className="field-left"
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
    </div>
  );
}

// == Export
export default EditProfil;

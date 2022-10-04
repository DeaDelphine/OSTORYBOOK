// == Import
import './styles.scss';

// == Component
function ProfilForm() {
  return (
    <div className="profil-form">
      <div className="profil-form-container">
        <h2 className="profil-form-title">MON PROFIL</h2>
          <div className="profil-form-element">
            <form className="profil-form--form">
              <div className="field">
              <label 
                htmlFor="#"
                className="field-left"
              >
                Pseudo* :
              </label>
              <input
                type="text"
                className="field-input-text"
                name="nickname"
                placeholder="Pseudonyme (non modifiable)"
              />
              <label 
                htmlFor="#"
                className="field-left"
              >
                Adresse mail* :
              </label>
              <input
                type="email"
                className="field-input-email"
                name="email"
                placeholder="Email (non modifiable)"
              />
              <label 
                htmlFor="#"
                className="field-left"
              >
                Rôle* :
              </label>
              <select
                type="select"
                className="field-input-select"
                name="role"
              >
                <option value="option1">Option 1</option>
                <option value="option1">Option 2</option>
                <option value="option1">Option 3</option>
              </select>
              <label 
                htmlFor="#"
                className="field-left"
              >
                Mot de passe* :
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
                Confirmez le mot de passe* :
              </label>
              <input
                type="password"
                className="field-input-password"
                name="password"
                placeholder="**********"
              />
              <button
                className="profil-form-button"
                type="submit"
              >
                VALIDER
              </button>
              <button
                className="profil-form-button"
                type="submit"
              >
                SUPPRIMER MON COMPTE
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

// == Export
export default ProfilForm;

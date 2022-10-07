// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';
import MyProfil from './MyProfil/index';
import EditProfil from './MyProfil/EditProfil';

// == Component
function Profil() {
  return (
    <div className="container">
      <MyProfil />
      <EditProfil />
      <NavLink
        to="/mon-compte"
        className="container-button--return"
        style={{ fontFamily: 'arial', display: 'flex', justifyContent: 'center' }}
      >
        Retour à mon profil
      </NavLink>
    </div>
  );
}

// == Export
export default Profil;

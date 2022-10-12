// == Import
import './styles.scss';
import ProfilEdit from './ProfilEdit';
import { NavLink } from 'react-router-dom';

// == Component
function Profil() {
  return (
    <div className="container" >
        <ProfilEdit />
        <NavLink
              to="/mon-compte"
              className="container-button--return"
            > 
              Retour à mon profil     
        </NavLink>
    </div>
  );
}

// == Export
export default Profil;

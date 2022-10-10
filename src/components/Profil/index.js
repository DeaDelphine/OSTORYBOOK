// == Import
import './styles.scss';
import { useSelector } from 'react-redux';
import MyProfil from '../MyProfil';

// == Component
function Profil() {
  const nickname = useSelector((state) => state.auth.nickname);
  const email = useSelector((state) => state.auth.email);
  const roles = useSelector((state) => state.auth.roles);
  return (
    <div className="container">
      <MyProfil nickname={nickname} email={email} roles={roles} />
    </div>
  );
}

// == Export
export default Profil;

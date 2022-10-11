// == Import
import './styles.scss';
import { useSelector } from 'react-redux';
import MyProfil from '../MyProfil';

// == Component
function Profil() {
  const nickname = useSelector((state) => state.user.nickname);
  const email = useSelector((state) => state.user.email);
  const roles = useSelector((state) => state.user.roles);
  return (
    <div className="container">
      <MyProfil nickname={nickname} email={email} roles={roles} />
    </div>
  );
}

// == Export
export default Profil;

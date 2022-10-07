// == Import
import './styles.scss';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfilForm from './ProfilForm';

// == Component
function Profil() {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const loggedValue = useSelector((state) => state.user.logged);
  const nicknameValue = useSelector((state) => state.user.nickname);

  return (
    <div className="container">
      <ProfilForm />
    </div>
  );
}

// == Export
export default Profil;

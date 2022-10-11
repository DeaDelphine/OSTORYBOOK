// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MyProfil from '../MyProfil';
import { fetchUser } from '../../actions/user';

// == Component
function Profil() {
  const users = useSelector((state) => state.user);
  console.log(users);
  // const nickname = useSelector((state) => state.user.nickname);
  // const email = useSelector((state) => state.user.email);
  // const roles = useSelector((state) => state.user.roles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className="container">
      {users.map((user) => (
        <MyProfil {...user} />
      ))}
    </div>
  );
}

// == Export
export default Profil;
// nickname={nickname} email={email} roles={roles}

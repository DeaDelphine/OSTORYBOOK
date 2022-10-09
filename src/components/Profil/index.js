// == Import
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyProfil from '../MyProfil';
import { fetchUser } from '../../actions/user';

// == Component
function Profil() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="container">

      <MyProfil />
    </div>
  );
}

// == Export
export default Profil;

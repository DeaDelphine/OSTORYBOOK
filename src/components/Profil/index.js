// == Import
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MyProfil from '../MyProfil';
import { fetchUser, setUser } from '../../actions/user';
import { saveUserData } from '../../actions/auth';

// == Component
function Profil({ email, nickname, roles }) {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('nickname', 'email', 'roles', nickname, email, roles);
    dispatch(setUser());
  }, []);

  return (
    <div className="container">
      <MyProfil />
    </div>
  );
}
MyProfil.propTypes = {
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  roles: PropTypes.string.isRequired,
};

// == Export
export default Profil;

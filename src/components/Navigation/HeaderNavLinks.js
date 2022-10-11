// == Import
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUser } from '../../actions/user';
import './styles.scss';

/* eslint-disable react/button-has-type */

// == Component
function HeaderNavLinks() {
  const token = !!localStorage.getItem('token');
  const isLogged = (useSelector((state) => state.auth.logged) || token);

  const handleLogout = () => {
    console.log('handleLogout');
    localStorage.clear();
  };
  const dispatch = useDispatch();
  return (
    <ul className="header header-navigation">
      { isLogged && (
        <NavLink
          // onClick={() => props.isMobile && props.closeMobileMenu()}
          to="/mon-compte"
          className="header__link"
          onClick={(event) => {
            dispatch(fetchUser());
          }}
        >
          Mon compte
        </NavLink>
      )}
      <NavLink
        to="/"
        className="header__link"
        // onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Accueil
      </NavLink>
      { !isLogged && (
        <NavLink
          // onClick={() => props.isMobile && props.closeMobileMenu()}
          to="/connexion"
          className="header__link"
        >
          Connexion
        </NavLink>
      )}
      { isLogged && (
        <NavLink
          onClick={(event) => {
            handleLogout();
            props.isMobile && props.closeMobileMenu();
          }}
          to="/"
          className="header__link"
        >
          Déconnexion
        </NavLink>
      )}
    </ul>
  );
}

// == Export
export default HeaderNavLinks;

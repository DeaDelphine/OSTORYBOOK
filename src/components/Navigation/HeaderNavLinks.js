// == Import
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUser } from '../../actions/user';
import './styles.scss';

/* eslint-disable react/button-has-type */

// == Component
function HeaderNavLinks() {
  const token = !!localStorage.getItem('token');
  const isLogged = (useSelector((state) => state.auth.logged) || token);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <ul className="header header-navigation">
      <NavLink
        to="/"
        className="header__link"
        // onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Accueil
      </NavLink>
      { isLogged && (
        <NavLink
          // onClick={() => props.isMobile && props.closeMobileMenu()}
          to="/mon-compte"
          className="header__link"
          onClick={(event) => {
            fetchUser();
          }}
        >
          Mon compte
        </NavLink>
      )}
      { !isLogged && (
        <NavLink
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

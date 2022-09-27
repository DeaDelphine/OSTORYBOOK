// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import logo from 'src/assets/images/logo.png';
/* eslint-disable react/button-has-type */

// == Component
function Header() {
  return (
    <div className="header">
      <ul className="header header-navigation">
        <NavLink
          to="/mon-compte"
          className="header__link"
        >
          Mon compte
        </NavLink>
        <NavLink
          to="/"
          className="header__link"
        >
          <img className="header header__logo" src={logo} alt="logo" />
        </NavLink>
        <NavLink
          to="/connexion"
          className="header__link"
        >
          Connexion
        </NavLink>
      </ul>
    </div>
  );
}

// == Export
export default Header;

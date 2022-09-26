// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';

/* eslint-disable react/button-has-type */

// == Component
function Header() {
  return (
    <div className="navbar header">

      <ul className="header header__links">
        <li className="header__item">
          <NavLink to="/mon-compte" className="header__link">
            Mon compte
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/connexion" className="header__link">
            Connexion
          </NavLink>
        </li>
      </ul>

    </div>

  );
}

// == Export
export default Header;

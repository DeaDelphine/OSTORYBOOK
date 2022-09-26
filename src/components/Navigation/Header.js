// == Import
import './styles.scss';
/* eslint-disable react/button-has-type */

// == Component
function Header() {
  return (
    <div className="navbar header">
      <ul className="header header__links">
        <li className="header__item">
          <a href="#" className="header__link">
            Mon compte
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            Se déconnecter
          </a>
        </li>
      </ul>
      <button className="header__burger">
        <span className="burger-bar" />
      </button>

    </div>

  );
}

// == Export
export default Header;

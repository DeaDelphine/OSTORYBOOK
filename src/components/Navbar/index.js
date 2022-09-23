import './styles.scss';
/* eslint-disable react/button-has-type */
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Mon compte
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Se déconnecter
          </a>
        </li>
      </ul>
      <button className="navbar__burger">
        <span className="burger-bar" />
      </button>

    </div>

  );
}

export default Navbar;

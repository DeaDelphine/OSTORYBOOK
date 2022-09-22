import './styles.scss';
/* eslint-disable react/button-has-type */
function Navbar() {
  return (
    <div className="navbar">
      <button className="navbar__button">
        Mon compte
      </button>
      <button className="navbar__button">
        Se déconnecter
      </button>
    </div>
  );
}

export default Navbar;

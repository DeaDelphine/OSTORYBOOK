/* eslint-disable no-unused-expressions */
// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '../../actions/user';
/* eslint-disable react/button-has-type */

// == Component
function HeaderNavLinks() {
  const token = !!localStorage.getItem('token');
  const isLogged = (useSelector((state) => state.auth.logged) || token);

  const handleLogout = () => {
    localStorage.clear();
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className="navbar__links">
        <ul className="navbar-header__links">
          <li className="navbar__item">
            <NavLink
              to="/"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              Accueil
            </NavLink>
          </li>
          { isLogged && (

          <li className="navbar__item">
            <NavLink
              to="/mon-compte"
              className="navbar__link"
              onClick={() => {
                fetchUser();
                handleShowLinks();
              }}
            >
              Mon compte
            </NavLink>
          </li>
          )}

          { !isLogged && (
          <li className="navbar__item">
            <NavLink
              to="/connexion"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              Connexion
            </NavLink>
          </li>
          )}
          { isLogged && (
          <li className="navbar__item">
            <NavLink
              onClick={() => {
                handleLogout();
                useEffect(() => {
                  handleShowLinks();
                });
              }}
              to="/"
              className="navbar__link"
            >
              D??connexion
            </NavLink>
          </li>
          )}
        </ul>

        <ul className="navbar-footer__links">
          <li className="navbar__item">
            <NavLink
              to="/nous-contacter"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              Nous contacter
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/cgu"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              CGU
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/policies"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              Politique de confidentialit??
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/credits"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              Cr??dits
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/regles-du-jeu"
              className="navbar__link"
              onClick={handleShowLinks}
            >
              R??gles du jeu
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

// == Export
export default HeaderNavLinks;

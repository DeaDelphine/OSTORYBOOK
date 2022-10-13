// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '../../actions/user';
/* eslint-disable react/button-has-type */

// == Component
function HeaderNavLinks() {
  const token = !!localStorage.getItem('token');
  const isLogged = (useSelector((state) => state.auth.logged) || token);

  const handleLogout = () => {
    localStorage.clear();
    console.log('handleLogout');
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
            >
              Accueil
            </NavLink>
          </li>
          { isLogged && (

          <li className="navbar__item">
            <NavLink
              to="/mon-compte"
              className="navbar__link"
              onClick={(event) => {
                fetchUser();
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
            >
              Connexion
            </NavLink>
          </li>
          )}
          { isLogged && (
          <li className="navbar__item">
            <NavLink
              onClick={(event) => {
                handleLogout();
                props.isMobile && props.closeMobileMenu();
              }}
              to="/"
              className="navbar__link"
            >
              Déconnexion
            </NavLink>
          </li>
          )}
        </ul>

        <ul className="navbar-footer__links">
          <li className="navbar__item">
            <NavLink
              to="/nous-contacter"
              className="navbar__link"
            >
              Nous contacter
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/cgu"
              className="navbar__link"
            >
              CGU
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/policies"
              className="navbar__link"
            >
              Politiques de confidentialité
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/credits"
              className="navbar__link"
            >
              Crédits
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/regles-du-jeu"
              className="navbar__link"
            >
              Règles du jeu
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

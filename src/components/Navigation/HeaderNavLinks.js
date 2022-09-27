// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import logo from 'src/assets/images/logo.png';
import React, {useState} from 'react';
/* eslint-disable react/button-has-type */

// == Component
function HeaderNavLinks() {
  return (
    <ul className="header header-navigation">
      <NavLink
        to="/mon-compte"
        className="header__link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Mon compte
      </NavLink>
      <NavLink
        to="/"
        className="header__link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/connexion"
        className="header__link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Connexion
      </NavLink>
    </ul>
  );
}

// == Export
export default HeaderNavLinks;

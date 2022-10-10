// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import logo from 'src/assets/images/logo.png';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
/* eslint-disable react/button-has-type */

// == Component
function HeaderNavLinks() {
  const isLogged = useSelector((state) => state.user.logged);

  const handleLogout = () => {
    console.log('handleLogout');
    localStorage.clear();
  };

  return (
    <ul className="header header-navigation">
      { isLogged && (
        <NavLink
          // onClick={() => props.isMobile && props.closeMobileMenu()}
          to="/mon-compte"
          className="header__link"
        >
          Mon compte
        </NavLink>
      )}
      <NavLink
        to="/"
        className="header__link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Accueil
      </NavLink>
      { !isLogged && (
        <NavLink
          onClick={() => props.isMobile && props.closeMobileMenu()}
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

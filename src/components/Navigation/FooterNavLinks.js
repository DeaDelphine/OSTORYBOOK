// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import React, { useState } from 'react';
/* eslint-disable react/button-has-type */

// == Component
function FooterNavLinks() {
  return (
    <ul className="footer footer-navigation">
      <NavLink
        to="/nous-contacter"
        className="footer__links"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Nous contacter
      </NavLink>

      <NavLink
        to="/cgu"
        className="footer__links"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        CGU
      </NavLink>
      <NavLink
        to="/mention-legales"
        className="footer__links"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Mentions légales
      </NavLink>
      <NavLink
        to="/credits"
        className="footer__links"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Crédits
      </NavLink>
      <NavLink
        to="/regles-du-jeu"
        className="footer__links"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Règles du jeu
      </NavLink>
    </ul>
  );
}

// == Export
export default FooterNavLinks;

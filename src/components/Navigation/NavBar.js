// == Import
import './styles.scss';
import React, {useState} from 'react';
import HeaderNavigation from './HeaderNavigation.js';
import MobileNavigation from './MobileNavigation.js';
import FooterNavigation from './FooterNavigation.js';
/* eslint-disable react/button-has-type */

// == Component
function NavBar() {
  return (
    <div className="navbar">
      <HeaderNavigation />
      <MobileNavigation />
      <FooterNavigation />
    </div>
  );
}

// == Export
export default NavBar;

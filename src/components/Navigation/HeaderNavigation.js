// == Import
import './styles.scss';
import React, {useState} from 'react';
import HeaderNavLinks from './HeaderNavLinks';
/* eslint-disable react/button-has-type */

// == Component
function Header() {
  return (
    <div className="header">
      <nav>
          <HeaderNavLinks />
      </nav>
    </div>
  );
}

// == Export
export default Header;

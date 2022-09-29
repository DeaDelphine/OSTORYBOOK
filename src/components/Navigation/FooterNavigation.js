// == Import
import './styles.scss';
import React, { useState } from 'react';
import NavLinks from './FooterNavLinks';
/* eslint-disable react/button-has-type */

// == Component
function Footer() {
  return (
    <div className="footer">
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
}

// == Export
export default Footer;

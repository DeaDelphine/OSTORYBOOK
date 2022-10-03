// == Import
import './styles.scss';

import HeaderNavigation from './HeaderNavigation';
import MobileNavigation from './MobileNavigation';
import FooterNavigation from './FooterNavigation';
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

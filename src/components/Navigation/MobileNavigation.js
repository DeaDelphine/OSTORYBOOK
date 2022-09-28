// == Import
import './styles.scss';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import FooterNavLinks from './FooterNavLinks';
import HeaderNavLinks from './HeaderNavLinks';

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FiMenu
      className="mobile-navigation_hamburger"
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <MdOutlineClose
      className="mobile-navigation_close"
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open
      && (
      <div
        isMobile
        closeMobileMenu={closeMobileMenu}
      >
        <HeaderNavLinks className="header-navlinks" />
        <FooterNavLinks className="footer-navlinks" />
      </div>
      )}
    </nav>
  );
}

export default MobileNavigation;

// == Import
import './styles.scss';
import HeaderNavLinks from './HeaderNavLinks';
import FooterNavLinks from './FooterNavLinks';
import {FiMenu} from 'react-icons/fi'
import {MdOutlineClose} from 'react-icons/md'
import {useState} from 'react'

function MobileNavigation() {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <FiMenu 
                          className='mobile-navigation_hamburger'
                          size='30px'
                          onClick={() => setOpen(!open)}
                        />
  
  const closeIcon = <MdOutlineClose 
                      className='mobile-navigation_close'
                      size='30px'
                      onClick={() => setOpen(!open)}
                    />
  const closeMobileMenu = () => setOpen(false);

  return(
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && 
      <div
        isMobile={true}
        closeMobileMenu={closeMobileMenu}
      >
        <HeaderNavLinks className="header-navlinks" />
        <FooterNavLinks className="footer-navlinks"/>
      </div>
      }
    </nav>
  );
}

export default MobileNavigation;

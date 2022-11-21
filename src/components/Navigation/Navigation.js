// == Import
import './styles.scss';
import NavLinks from './NavLinks';
/* eslint-disable react/button-has-type */

// == Component
function Navigation() {
  return (
    <div className="header">
      <NavLinks />
    </div>
  );
}

// == Export
export default Navigation;

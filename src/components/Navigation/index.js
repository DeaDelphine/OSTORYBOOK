import './styles.scss';
/* eslint-disable react/button-has-type */

import Header from 'src/components/Navigation/Header';
import Footer from 'src/components/Navigation/Footer';
import MobileNavigation from 'src/components/Navigation/MobileNavigation';

function Navigation() {
  return (
    <div className="navigation">
      <Header />
      <Footer />
      <MobileNavigation />
    </div>

  );
}

export default Navigation;

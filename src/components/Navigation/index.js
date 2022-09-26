// == Import
import './styles.scss';
/* eslint-disable react/button-has-type */

// == Component
import Header from 'src/components/Navigation/Header';
import Footer from 'src/components/Navigation/Footer';

function Navigation() {
  return (
    <div className="navigation">
      <Header />
      <Footer />
    </div>

  );
}

// == Export
export default Navigation;

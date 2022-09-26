import './styles.scss';
/* eslint-disable react/button-has-type */

import Header from 'src/components/Navbar/Header';
import Footer from 'src/components/Navbar/Footer';

function Navbar() {
  return (
    <div className="navbar">
      <Header />
      <Footer />
    </div>

  );
}

export default Navbar;

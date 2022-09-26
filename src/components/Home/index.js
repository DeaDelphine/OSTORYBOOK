// == Import
import './styles.scss';
import logo from 'src/assets/images/logo.png';
/* eslint-disable react/button-has-type */

// == Component
function Home() {
  return (
    <div className="home">
      <img className="home home__logo" src={logo} alt="logo" />
      <button className="home home__button">
        Commencer l'aventure
      </button>
    </div>
  );
}

// == Export
export default Home;

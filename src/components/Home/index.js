// == Import
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './styles.scss';
/* eslint-disable react/button-has-type */

// == Component
function Home() {
  const isLogged = localStorage.getItem('token') ?? false;

  return (
    <div className="home">
      <NavLink
        to="/"
      >
        <img className="home home__logo" src={logo} alt="logo" />
      </NavLink>
      { isLogged
        ? (
          <NavLink
            to="/histoires"
            className="home home__button"
          > Commencer l'aventure
          </NavLink>
        )
        : (
          <NavLink
            to="/connexion"
            className="home home__button"
          > Commencer l'aventure
          </NavLink>
        )}
    </div>
  );
}

// == Export
export default Home;

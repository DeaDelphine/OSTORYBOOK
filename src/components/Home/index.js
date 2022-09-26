// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
/* eslint-disable react/button-has-type */

// == Component
function Home() {
  return (
    <div className="home">
      <h1 className="home__title">O'Story Book</h1>
      <NavLink
        to="/histoires"
        className="home__button"
      > Commencer l'aventure
      </NavLink>

    </div>
  );
}

// == Export
export default Home;

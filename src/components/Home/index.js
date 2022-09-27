// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
/* eslint-disable react/button-has-type */

// == Component
function Home() {
  return (
    <div className="home">
      <NavLink
        to="/histoires"
        className="home home__button"
      > Commencer l'aventure
      </NavLink>
    </div>
  );
}

// == Export
export default Home;

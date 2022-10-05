// == Import
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';

import './styles.scss';
/* eslint-disable react/button-has-type */

// == Component
function Home({ isLogged }) {
  return (
    <div className="home">
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
Home.propTypes = {
  isLogged: PropTypes.bool,
};
Home.defaultProps = {
  isLogged: false,
};
// == Export
export default Home;

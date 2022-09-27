// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Component
function Footer() {
  return (
    <div className="footer">
      <div className="navigation navigation-footer">
        <NavLink
          to="/nous-contacter"
          className="footer__links"
        >
          Nous contacter
        </NavLink>

        <NavLink
          to="/cgu"
          className="footer__links"
        >
          CGU
        </NavLink>
        <NavLink
          to="/mention-legales"
          className="footer__links"
        >
          Mentions légales
        </NavLink>
        <NavLink
          to="/credits"
          className="footer__links"
        >
          Crédits
        </NavLink>
        <NavLink
          to="/regles-du-jeu"
          className="footer__links"
        >
          Règles du jeu
        </NavLink>
      </div>
    </div>
  );
}

// == Export
export default Footer;

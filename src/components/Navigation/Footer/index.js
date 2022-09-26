import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
function Footer() {
  return (
    <div className="footer">
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
        to="/regle-du-jeu"
        className="footer__links"
      >
        Règle du jeu
      </NavLink>
    </div>
  );
}

// == Export
export default Footer;

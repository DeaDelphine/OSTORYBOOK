import './styles.scss';
/* eslint-disable react/button-has-type */
function Footer() {
  return (
    <div className="footer">
      <div className="footer__item">
        <ul className="footer__links">
          <li className="footer__item">
            <a href="#" className="footer__link">Nous contacter</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Mentions Légales</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Crédits</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Règles du jeu</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Conditions générales</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

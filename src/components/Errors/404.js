import { Link } from 'react-router-dom';

import './styles.scss';

function Error404() {
  return (
    <div className="">
      <h1 className="">404</h1>
      <p className="">
        Ça manque d'aventures par ici..
      </p>
      <Link to="/">
        <div className="button__return">
          <button
            type="submit"
          >
            Retour à l'accueil
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Error404;

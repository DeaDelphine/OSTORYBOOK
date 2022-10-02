/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

/* eslint-disable max-len */
function Page({
  id, title, content, image, choices,
}) {
  return (

    <div>
      <div className="page page-container" key={id}>
        <img className="page page-container__img" src={image} alt="story-img" />
        <h2 className="page page-container__title">{title}</h2>
        <p className="page page-container__excerpt">{content}</p>

        { choices ? choices.map((choice) => (
          <Link to="/storypage">
            <div>{choice.description}</div>
            <button
              className="story story-container__button"
            > Aller à la page {choice.page_to_redirect}
            </button>
          </Link>
        )) : 'wrong way sorry ! '}

      </div>
    </div>
  );
}

Page.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  choices: PropTypes.array,
};

Page.defaultProps = {
  choices: null,
  id: null,
  title: null,
  content: null,
  image: null,
};

export default Page;

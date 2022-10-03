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
        <p className="page page-container--title">{title}</p>
        <div className="page-container--content">
          <p className="page page-container--content__subtitle">{content}</p>
          <img className="page page-container--content__img" src={image} alt="story-img" />
        </div>
        <div className="page page-container--choice">
          { choices ? choices.map((choice) => (
            <Link to="/storypage">
              <div className="page-container--choice__content">{choice.description}</div>
              <button
                className="page-container--choice__button"
              > Aller à la page {choice.page_to_redirect}
              </button>
            </Link>
          )) : 'wrong way sorry ! '}
        </div>
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

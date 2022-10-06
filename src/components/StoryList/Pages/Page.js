/* eslint-disable react/button-has-type */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import PropTypes from 'prop-types';
import './styles.scss';
import { fetchPages } from 'src/actions/pages';
import { Link, NavLink } from 'react-router-dom';


/* eslint-disable max-len */
function Page({
  id, title, content, image, choices, page_end
}) {
  const dispatch = useDispatch();

  return (

    <div>
      <div className="page page-container" key={id}>
        <p className="page page-container--title">{title}</p>
        <div className="page-container--content">
          <p className="page page-container--content__subtitle">{content}</p>
          <img className="page page-container--content__img" src={image} alt="story-img" />
        </div>
        <div className="page page-container--choice">
          {choices ? choices.map((choice) => (
            <Link to="/histoire">
              <div className="page-container--choice__content">{choice.description}</div>
              <button
                className="page-container--choice__button"
                onClick={(event) => {
                  localStorage.setItem('page', choice.page_to_redirect);
                  dispatch(fetchPages(localStorage.getItem('id'), localStorage.getItem('page')));
                }}
              > Aller à la page {choice.page_to_redirect}
              </button>
            </Link>

          )) : 'wrong way sorry ! ' }
        </div>
        <NavLink
          to="/histoires"
          className="page-container--choice__button-return"
          onClick={(event) => {
            localStorage.removeItem('id');
            localStorage.removeItem('page');
          }}
        > Retour à la liste des histoires
        </NavLink>
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
  page_end: PropTypes.number,
};

Page.defaultProps = {
  choices: null,
  id: null,
  title: null,
  content: null,
  image: null,
  page_end: null,
};

export default Page;

// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';

import { fetchPages } from '../../../actions/pages';
// Style
import './styles.scss';

// == Component
/* eslint-disable max-len */
function Pages() {
  const pages = useSelector((state) => (state.pages.page));

  useEffect(() => {
    const id = localStorage.getItem('id');
    const startPage = localStorage.getItem('page');
    dispatch(fetchPages(id, startPage));
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="page">
        <div className="page page-list">
          <Page {...pages} />
        </div>
      </div>
    </div>
  );
}

export default Pages;

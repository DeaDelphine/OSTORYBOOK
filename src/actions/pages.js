export const FETCH_PAGES = 'FETCH_PAGES';
export const SAVE_PAGE = 'SAVE_PAGE';

// action type for page middleware
export const fetchPages = (story, startPage) => ({
  type: FETCH_PAGES,
  story: story,
  startPage: startPage,
});
export const savePage = (page) => ({
  type: SAVE_PAGE,
  page: page,

});

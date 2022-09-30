export const FETCH_PAGES = 'FETCH_PAGES';
export const SAVE_PAGE = 'SAVE_PAGE';

export const fetchPages = (id, startPage) => ({
  type: FETCH_PAGES,
  startPage: startPage,
  id: id,
});
export const savePage = (page) => ({
  type: SAVE_PAGE,
  page: page,
});

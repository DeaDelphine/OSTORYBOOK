export const FETCH_PAGES = 'FETCH_PAGES';

export const fetchPages = (id, startPage) => ({
  type: FETCH_PAGES,
  id: id,
  startPage: startPage,
});

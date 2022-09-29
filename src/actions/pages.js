export const FETCH_PAGES = 'FETCH_PAGES';

export const fetchPages = (pages) => ({
  type: FETCH_PAGES,
  pages: pages,
});

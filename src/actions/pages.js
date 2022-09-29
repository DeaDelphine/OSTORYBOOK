export const FETCH_PAGES = 'FETCH_PAGES';

export const fetchPages = (id, page) => ({
  type: FETCH_PAGES,
  id: id,
  page_id: page,
});

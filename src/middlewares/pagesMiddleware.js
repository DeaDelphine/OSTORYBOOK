// import axios from 'axios';

// import { FETCH_PAGES, fetchPages } from '../actions/pages';

// const pagesMiddleware = (store) => (next) => (action) => {
//   switch (action.type) {
//     case FETCH_PAGES:

//       axios.get('http://0.0.0.0:8000/api/histoire{/id}/page{/page_id}')
//         .then((response) => {
//           store.dispatch(fetchPages(response.data));
//         })
//         .catch((error) => {
//           console.log(error);
//         });

//       break;
//     default:
//   }

//   next(action);
// };

// export default pagesMiddleware;

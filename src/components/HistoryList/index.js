// == Import
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import History from './History';

// == Component
function HistoryList() {
  const { slug } = useParams();

  return (
    <div className="history history-list">
      <History />
    </div>
  );
}

// == Export
export default HistoryList;

// == Import
import './styles.scss';

import History from './History';

// == Composant
function HistoryList() {
  return (
    <div className="history history-list">
      <p>HistoryList Component</p>
      <History />
    </div>
  );
}

// == Export
export default HistoryList;

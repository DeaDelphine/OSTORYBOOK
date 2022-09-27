// == Import

import './styles.scss';

import History from './History';

// == Component
function HistoryList() {
  return (
    <div className="history history-list">
      <History />
      <History />
      <History />
    </div>
  );
}

// == Export
export default HistoryList;

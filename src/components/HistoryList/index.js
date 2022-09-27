// == Import
import { Card } from 'semantic-ui-react';
import './styles.scss';

import History from './History';

// == Component
function HistoryList() {
  return (
    <div className="history history-list">
      <Card.Group itemsPerRow={3} stackable />
      <History />
    </div>
  );
}

// == Export
export default HistoryList;

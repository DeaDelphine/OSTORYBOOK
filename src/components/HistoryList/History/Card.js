import PropTypes from 'prop-types';

import { Card as CardUI } from 'semantic-ui-react';
// == Import
import './styles.scss';

// == Composant
function Card({ title, content }) {
  return (
    <CardUI>
      {/* <Image src={avatarUrl} wrapped ui={false} /> */}
      <CardUI.Content>
        <CardUI.Header>{title}</CardUI.Header>
        {/* <Card.Meta>
          <span className="date">{login}</span>
        </Card.Meta> */}
        <CardUI.Description>
          {content}
        </CardUI.Description>
      </CardUI.Content>
    </CardUI>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// == Export
export default Card;

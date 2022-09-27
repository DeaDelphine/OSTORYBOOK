// == Import
import { Card, Image } from 'semantic-ui-react';

// == Composant
function History() {
  return (
    <div className="history">
      <Card>
        <Image src="" wrapped ui={false} />
        <Card.Content>
          <Card>Histoire 1 </Card>
          <Card.Meta>
            <span className="date">créer le 12/12/12</span>
          </Card.Meta>
          <Card.Description>
            c'est l'histoire de Xavier qui ...
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

// == Export
export default History;

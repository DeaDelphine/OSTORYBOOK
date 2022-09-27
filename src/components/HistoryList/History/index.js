// == Import
import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import './style.scss';

// == Composant
function History() {
  return (
    <div className="history">
      <Card.Group className="cards__group">
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src=""
            />
            <Card>Histoire 1</Card>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione incidunt quaerat iste aperiam quo deleniti illo quibusdam exercitationem quasi dolores, tempore ea saepe. Cumque provident fugiat perspiciatis culpa expedita recusandae!
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="black">
                Commencer une histoire
              </Button>

            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src=""
            />
            <Card>Histoire 2</Card>
            <Card.Description>
              Molly wants to add you to the group <strong>musicians</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam distinctio deserunt voluptatem ex voluptas nemo ducimus necessitatibus a quas accusamus culpa ratione minima tempore, vero, quod deleniti quae molestias.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="black">
                Commencer une histoire
              </Button>

            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src=""
            />
            <Card>Histoire 3</Card>
            <Card.Description>
              Jenny requested permission to view your contact details Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, ratione deserunt. Excepturi cumque soluta pariatur? Aut ex tempore eum nulla, provident, amet dolore ab rem adipisci, repellendus excepturi blanditiis ipsam.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="black">
                Commencer une histoire
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

// == Export
export default History;

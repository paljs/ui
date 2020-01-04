import React from 'react';
import { Card, CardBody, Button, Popover } from '../../../../src';
import { placement } from '../shared';

function Placement() {
  return (
    <Card size="Tiny">
      <header>Popover Placement</header>
      <CardBody id="scrollPlacementId">
        {placement.map(place => (
          <Popover
            key={place}
            eventListener="#scrollPlacementId"
            className="with-margin inline-block"
            trigger="hint"
            placement={place}
            overlay="Hello, how are you today?"
          >
            <Button fullWidth>{place}</Button>
          </Popover>
        ))}
      </CardBody>
    </Card>
  );
}

export default Placement;

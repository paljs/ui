import React from 'react';
import { Card, CardBody, Button, Tooltip } from 'oah-ui';
import { placement } from '../shared';

function Placement() {
  return (
    <Card size="Tiny">
      <header>Popover Placement</header>
      <CardBody id="scrollPlacementId">
        {placement.map((place) => (
          <Tooltip
            key={place}
            eventListener="#scrollPlacementId"
            className="with-margin inline-block"
            trigger="hint"
            placement={place}
            content="Hello"
            icon="home"
          >
            <Button fullWidth>{place}</Button>
          </Tooltip>
        ))}
      </CardBody>
    </Card>
  );
}

export default Placement;

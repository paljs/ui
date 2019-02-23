import React from 'react';
import { Card, CardBody, Button, Tooltip } from 'oah-ui';

function Placement() {
  return (
    <Card size="XS">
      <header>Popover Placement</header>
      <CardBody id="scrollPlacementId">
        {['start', 'end', 'right', 'top', 'left', 'bottom'].map(place => (
          <Tooltip
            key={place}
            eventListener="#scrollPlacementId"
            className="with-margin inline-block"
            trigger="hint"
            placement={place}
            content="Hello"
            icon="ion-ios-home"
          >
            <Button fullWidth>{place}</Button>
          </Tooltip>
        ))}
      </CardBody>
    </Card>
  );
}

export default Placement;

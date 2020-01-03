import React from 'react';
import { Card, CardBody, Button, Popover } from '../../../../src';

function Placement() {
  return (
    <Card size="XS">
      <header>Popover Placement</header>
      <CardBody id="scrollPlacementId">
        {['start', 'end', 'right', 'top', 'left', 'bottom'].map(place => (
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

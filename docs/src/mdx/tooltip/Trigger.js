import React from 'react';
import { Card, CardBody, Button, Tooltip } from 'oah-ui';

function Trigger() {
  return (
    <Card size="XS">
      <header>Popover Trigger</header>
      <CardBody id="scrollTriggerId">
        {['click', 'hover', 'focus', 'hint'].map(trigger => (
          <Tooltip
            key={trigger}
            eventListener="#scrollTriggerId"
            className="with-margin inline-block"
            trigger={trigger}
            placement="top"
            icon="ion-ios-home"
          >
            <Button fullWidth>{trigger}</Button>
          </Tooltip>
        ))}
      </CardBody>
    </Card>
  );
}

export default Trigger;

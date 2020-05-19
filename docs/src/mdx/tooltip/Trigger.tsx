import React from 'react';
import { Card, CardBody, Button, Tooltip } from 'oah-ui';
import { trigger } from '../shared';

function Trigger() {
  return (
    <Card size="Tiny">
      <header>Popover Trigger</header>
      <CardBody id="scrollTriggerId">
        {trigger.map((trigger) => (
          <Tooltip
            key={trigger}
            eventListener="#scrollTriggerId"
            className="with-margin inline-block"
            trigger={trigger}
            placement="top"
            icon="home"
          >
            <Button fullWidth>{trigger}</Button>
          </Tooltip>
        ))}
      </CardBody>
    </Card>
  );
}

export default Trigger;

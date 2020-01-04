import React from 'react';
import { Card, CardBody, Button, Popover } from 'oah-ui';
import { trigger } from '../shared';

function Trigger() {
  return (
    <Card size="Tiny">
      <header>Popover Trigger</header>
      <CardBody id="scrollTriggerId">
        {trigger.map(trigger => (
          <Popover
            key={trigger}
            eventListener="#scrollTriggerId"
            className="with-margin inline-block"
            trigger={trigger}
            placement="top"
            overlay="Hello, how are you today?"
          >
            <Button fullWidth>{trigger}</Button>
          </Popover>
        ))}
      </CardBody>
    </Card>
  );
}

export default Trigger;

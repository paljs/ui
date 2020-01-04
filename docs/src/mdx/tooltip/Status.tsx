import React from 'react';
import { Card, CardBody, Button, Tooltip } from 'oah-ui';
import { status } from '../shared';

function Status() {
  return (
    <Card size="Tiny">
      <header>Popover Status</header>
      <CardBody id="scrollStatusId">
        {status.map(state => (
          <Tooltip
            key={state}
            eventListener="#scrollStatusId"
            className="with-margin inline-block"
            trigger="hint"
            placement="top"
            content="hello"
            status={state}
          >
            <Button fullWidth>{state}</Button>
          </Tooltip>
        ))}
      </CardBody>
    </Card>
  );
}

export default Status;

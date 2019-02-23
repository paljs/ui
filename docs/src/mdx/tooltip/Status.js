import React from 'react';
import { Card, CardBody, Button, Tooltip } from 'oah-ui';

function Status() {
  return (
    <Card size="XS">
      <header>Popover Status</header>
      <CardBody id="scrollStatusId">
        {['Info', 'Success', 'Danger', 'Primary', 'Warning'].map(state => (
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

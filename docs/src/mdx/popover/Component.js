import React from 'react';
import { Card, CardBody, Button, Popover, Tabs, Tab } from '../../../../src';

function Component() {
  return (
    <Card size="XS">
      <header>Popover Component</header>
      <CardBody id="scrollTriggerId">
        <Popover
          className="with-margin inline-block"
          trigger="click"
          placement="top"
          overlay={
            <Tabs activeIndex={0} fullWidth>
              <Tab title="Tab 1" icon="icon ion-ios-home" responsive>
                Content 1
              </Tab>
              <Tab title="Tab 2" icon="icon ion-ios-star-outline" responsive>
                Content 2
              </Tab>
            </Tabs>
          }
        >
          <Button fullWidth>Tabs</Button>
        </Popover>
        <Popover
          className="with-margin inline-block"
          trigger="click"
          placement="top"
          overlay={
            <Card className="popover-card">
              <header>Hello!</header>
              <CardBody>Hello, how are you today?</CardBody>
            </Card>
          }
        >
          <Button fullWidth>Card</Button>
        </Popover>
      </CardBody>
    </Card>
  );
}

export default Component;

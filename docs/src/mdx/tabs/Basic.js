import React from 'react';
import { Card, Tabs, Tab } from '../../../../src';

function Basic() {
  return (
    <Card>
      <Tabs>
        <Tab title="Tab 1">
          <h1>Content 1</h1>
        </Tab>
        <Tab title="Tab 2">
          <h1>Content 2</h1>
        </Tab>
        <Tab title="Tab 3">
          <h1>Content 3</h1>
        </Tab>
      </Tabs>
    </Card>
  );
}

export default Basic;

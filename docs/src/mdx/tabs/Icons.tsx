import React from 'react';
import { Card, Tabs, Tab } from '../../../../src';

function Icons() {
  return (
    <>
      <Card>
        <Tabs>
          <Tab title="Tab 1" icon="home" responsive>
            <h1>Content 1</h1>
          </Tab>
          <Tab title="Tab 2" icon="star-outline" responsive>
            <h1>Content 2</h1>
          </Tab>
          <Tab title="Tab 3" icon="toggle-right-outline" responsive>
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
      <h3>Disabled Tab</h3>
      <Card>
        <Tabs>
          <Tab title="Tab 1" icon="home" responsive>
            <h1>Content 1</h1>
          </Tab>
          <Tab title="Tab 2" icon="star-outline" responsive>
            <h1>Content 2</h1>
          </Tab>
          <Tab disabled title="Tab 3" icon="toggle-right-outline" responsive>
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
      <h3>Full Width</h3>
      <Card>
        <Tabs fullWidth>
          <Tab icon="home">
            <h1>Content 1</h1>
          </Tab>
          <Tab icon="star-outline">
            <h1>Content 2</h1>
          </Tab>
          <Tab icon="toggle-right-outline">
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
      <h3>With Badge</h3>
      <Card>
        <Tabs fullWidth>
          <Tab icon="home" badge={{ status: 'Danger', title: '11', position: 'topStart' }} responsive>
            <h1>Content 1</h1>
          </Tab>
          <Tab icon="star-outline" badge={{ status: 'Info', title: '11', position: 'bottomEnd' }} responsive>
            <h1>Content 2</h1>
          </Tab>
          <Tab icon="toggle-right-outline" badge={{ status: 'Success', title: '11', position: 'topStart' }} responsive>
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
    </>
  );
}

export default Icons;

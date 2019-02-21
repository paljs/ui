import React from 'react';
import { Card, Tabs, Tab } from 'oah-ui';

function Icons() {
  return (
    <>
      <Card>
        <Tabs>
          <Tab title="Tab 1" icon="icon ion-ios-home" responsive>
            <h1>Content 1</h1>
          </Tab>
          <Tab title="Tab 2" icon="icon ion-ios-star-outline" responsive>
            <h1>Content 2</h1>
          </Tab>
          <Tab title="Tab 3" icon="icon ion-ios-switch" responsive>
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
      <h3>Disabled Tab</h3>
      <Card>
        <Tabs>
          <Tab title="Tab 1" icon="icon ion-ios-home" responsive>
            <h1>Content 1</h1>
          </Tab>
          <Tab title="Tab 2" icon="icon ion-ios-star-outline" responsive>
            <h1>Content 2</h1>
          </Tab>
          <Tab disabled title="Tab 3" icon="icon ion-ios-switch" responsive>
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
      <h3>Full Width</h3>
      <Card>
        <Tabs fullWidth>
          <Tab icon="icon ion-ios-home">
            <h1>Content 1</h1>
          </Tab>
          <Tab icon="icon ion-ios-star-outline">
            <h1>Content 2</h1>
          </Tab>
          <Tab icon="icon ion-ios-switch">
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
      <h3>With Badge</h3>
      <Card>
        <Tabs fullWidth>
          <Tab
            icon="icon ion-ios-home"
            badge={{ status: 'Danger', title: '11', position: 'topStart' }}
            responsive
          >
            <h1>Content 1</h1>
          </Tab>
          <Tab
            icon="icon ion-ios-star-outline"
            badge={{ status: 'Info', title: '11', position: 'bottomEnd' }}
            responsive
          >
            <h1>Content 2</h1>
          </Tab>
          <Tab
            icon="icon ion-ios-switch"
            badge={{ status: 'Success', title: '11', position: 'topStart' }}
            responsive
          >
            <h1>Content 3</h1>
          </Tab>
        </Tabs>
      </Card>
    </>
  );
}

export default Icons;

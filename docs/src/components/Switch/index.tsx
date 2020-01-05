import React, { useState, Fragment } from 'react';
import { Card, Tabs, Tab } from 'oah-ui';

const Switch: React.FC<{ title: string; children: React.ReactNode[] }> = props => {
  const [state, setState] = useState(0);

  return (
    <Fragment>
      <Card>
        <header>{props.title}</header>
        <Tabs onSelect={i => setState(i)} fullWidth>
          <Tab icon={{ name: 'eye-outline', options: { animation: { type: 'zoom' } } }} title="Overview" />
          <Tab icon={{ name: 'settings-outline', options: { animation: { type: 'zoom' } } }} title="Api" />
          {props.children?.length > 2 ? (
            <Tab icon={{ name: 'droplet-outline', options: { animation: { type: 'zoom' } } }} title="Theme" />
          ) : (
            <></>
          )}
        </Tabs>
      </Card>
      {props.children[state]}
    </Fragment>
  );
};

export default Switch;

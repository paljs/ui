import React, { useState, Fragment } from 'react';
import { Card, EvaIcon } from '../../../../src';

import TabStyle from './style';

const Switch: React.FC<{ title: string; children: React.ReactNode[] }> = props => {
  const [state, setState] = useState(0);
  const getClassName = (v: number) => {
    return state === v ? 'tab active' : 'tab';
  };

  return (
    <Fragment>
      <Card>
        <header>{props.title}</header>
        <TabStyle>
          <ul className="tabs">
            <li className={getClassName(0)} onClick={() => setState(0)}>
              <a>
                <EvaIcon name="eye-outline" />
                <span>Overview</span>
              </a>
            </li>
            <li className={getClassName(1)} onClick={() => setState(1)}>
              <a>
                <EvaIcon name="settings-outline" />
                <span>Api</span>
              </a>
            </li>
            {props.children?.length > 2 && (
              <li className={getClassName(2)} onClick={() => setState(2)}>
                <a>
                  <EvaIcon name="droplet-outline" />
                  <span>Theme</span>
                </a>
              </li>
            )}
          </ul>
        </TabStyle>
      </Card>
      {props.children[state]}
    </Fragment>
  );
};

export default Switch;

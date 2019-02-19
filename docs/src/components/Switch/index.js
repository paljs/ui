import React, { useState, Fragment } from 'react';
import { Card } from 'oah-ui';

import TabStyle from './style';

/* eslint-disable */
function Switch(props) {
  const [state, setState] = useState(0);
  const getClassName = v => {
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
                <i className="icon ion-ios-eye" />
                <span>Overview</span>
              </a>
            </li>
            <li className={getClassName(1)} onClick={() => setState(1)}>
              <a>
                <i className="icon ion-ios-settings" />
                <span>Api</span>
              </a>
            </li>
            <li className={getClassName(2)} onClick={() => setState(2)}>
              <a>
                <i className="icon ion-ios-water" />
                <span>Theme</span>
              </a>
            </li>
          </ul>
        </TabStyle>
      </Card>
      {props.children[state]}
    </Fragment>
  );
}

export default Switch;

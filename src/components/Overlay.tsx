/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled from '../theme/styled-components';
import ReactDOM from 'react-dom';
import React from 'react';

const OverlayStyle = styled.div`
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  max-width: 100%;
  max-height: 100%;
`;

const Overlay: React.FC<{ children: React.ReactNode }> = props => {
  const [parent, setParent] = React.useState<HTMLDivElement>();

  React.useEffect(() => {
    const overlayParent = document.getElementById('overlay-container') as HTMLDivElement;
    overlayParent && setParent(overlayParent);
  }, []);

  return parent !== undefined ? (
    ReactDOM.createPortal(<OverlayStyle {...props}>{props.children}</OverlayStyle>, parent)
  ) : (
    <></>
  );
};

export default Overlay;

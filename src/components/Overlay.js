/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const OverlayStyle = styled.div`
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  max-width: 100%;
  max-height: 100%;
`;

function Overlay(props) {
  const [parent, setParent] = useState();

  useEffect(() => {
    const overlayParent = document.getElementById('overlay-container');
    setParent(overlayParent);
  }, []);
  return (
    parent !== undefined &&
    ReactDOM.createPortal(
      <OverlayStyle {...props}>{props.children}</OverlayStyle>,
      parent
    )
  );
}

Overlay.propTypes = {
  children: PropTypes.node
};
export default Overlay;

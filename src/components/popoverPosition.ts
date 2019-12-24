/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import layoutContext from './Layout/layout-context';
import { getPhysicalPosition } from './positionHelper';

const getMaxPlacement = (target, overlay) => {
  const positions = {
    top: target.top - overlay.height,
    bottom: window.innerHeight - target.bottom - overlay.height,
    left: target.left - overlay.width,
    right: window.innerWidth - target.right - overlay.width,
  };
  const arr = Object.values(positions);
  const max = Math.max(...arr);
  for (const key in positions) {
    if (positions.hasOwnProperty(key) && positions[key] === max) {
      return key;
    }
  }
};

const getPositionOfPlacement = (placement, target, overlay) => {
  const topBottom = {
    top: target.top + target.height / 2 - overlay.height / 2,
    bottom: window.innerHeight - (target.top + target.height / 2 + overlay.height / 2),
  };
  const leftRight = {
    left: target.left + (target.width / 2 - overlay.width / 2),
    right: window.innerWidth - (target.left + target.width / 2 + overlay.width / 2),
  };
  switch (placement) {
    case 'left':
      return {
        left: target.left - overlay.width,
        ...topBottom,
      };
    case 'right':
      return {
        left: target.right,
        ...topBottom,
      };
    case 'top':
      return {
        top: target.top - overlay.height,
        ...leftRight,
      };
    case 'bottom':
      return {
        top: target.bottom,
        ...leftRight,
      };
  }
};

const getAdjustmentPlacement = (placement, targetRef, overlayRef, key = 1) => {
  const target = targetRef.current.getBoundingClientRect();
  const overlay = overlayRef.current.getBoundingClientRect();

  if (key > 4) {
    const maxPlacement = getMaxPlacement(target, overlay);
    const position = getPositionOfPlacement(maxPlacement, target, overlay);
    return { placement: maxPlacement, position };
  }
  const position = getPositionOfPlacement(placement, target, overlay);
  const topBottom = position.top < 0 || position.bottom < 0;
  const leftRight = position.left < 0 || position.right < 0;
  switch (placement) {
    case 'left':
      if (position.left - 15 < 0 || topBottom) {
        return getAdjustmentPlacement('top', targetRef, overlayRef, key + 1);
      }
      break;
    case 'top':
      if (position.top - 15 < 0 || leftRight) {
        return getAdjustmentPlacement('right', targetRef, overlayRef, key + 1);
      }
      break;
    case 'right':
      if (window.innerWidth - position.left - 15 < overlay.width || topBottom) {
        return getAdjustmentPlacement('bottom', targetRef, overlayRef, key + 1);
      }
      break;
    case 'bottom':
      if (window.innerHeight - position.top - 15 < overlay.height || leftRight) {
        return getAdjustmentPlacement('left', targetRef, overlayRef, key + 1);
      }
      break;
  }
  return { placement, position };
};

export default function usePopoverPosition(props, targetRef, overlayRef) {
  const layout = React.useContext(layoutContext);
  const [position, setPosition] = React.useState();
  const [show, setShow] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const onClickHandle = () => {
    setShow(false);
  };
  const positionHandle = () => {
    const placement = getPhysicalPosition(layout.dir, props.placement);
    const data = getAdjustmentPlacement(placement, targetRef, overlayRef);
    setPosition(data.position);
    setPlacement(data.placement);
  };

  React.useEffect(() => {
    if (show) {
      positionHandle();
      window.addEventListener('resize', positionHandle);
      layout.addEventListener('scroll', positionHandle);
      window.addEventListener('click', onClickHandle);
      if (props.eventListener) {
        document.querySelector(props.eventListener).addEventListener('scroll', positionHandle);
      }

      return () => {
        window.removeEventListener('click', onClickHandle);
        window.removeEventListener('resize', positionHandle);
        layout.removeEventListener('scroll', positionHandle);
        if (props.eventListener) {
          document.querySelector(props.eventListener).removeEventListener('scroll', positionHandle);
        }
      };
    }
  }, [show, overlayRef.current]);

  return [position, placement, show, setShow];
}

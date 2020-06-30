/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import layoutContext from '../Layout/layout-context';
import { getPhysicalPosition } from './positionHelper';
import { Placement } from '../types';

interface Position {
  top: number;
  bottom?: number;
  right?: number;
  left: number;
}
export type PositionKeys = keyof Position;

const getMaxPlacement = (target: DOMRect, overlay: DOMRect) => {
  const positions = {
    top: target.top - overlay.height,
    bottom: window.innerHeight - target.bottom - overlay.height,
    left: target.left - overlay.width,
    right: window.innerWidth - target.right - overlay.width,
  };
  const arr = Object.values(positions);
  const max = Math.max(...arr);
  return (Object.keys(positions) as PositionKeys[]).find((key) => positions[key] === max) as PositionKeys;
};

const getPositionOfPlacement: (placement: PositionKeys, target: DOMRect, overlay: DOMRect) => Position = (
  placement,
  target,
  overlay,
) => {
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

const getAdjustmentPlacement: (
  placement: PositionKeys,
  targetRef: React.RefObject<HTMLDivElement>,
  overlayRef: React.RefObject<HTMLDivElement>,
  key?: number,
) => { placement: PositionKeys; position: Position } | void = (placement, targetRef, overlayRef, key = 1) => {
  const target = targetRef.current?.getBoundingClientRect();
  const overlay = overlayRef.current?.getBoundingClientRect();
  if (target && overlay) {
    if (key > 4) {
      const maxPlacement = getMaxPlacement(target, overlay);
      const position = getPositionOfPlacement(maxPlacement, target, overlay);
      return { placement: maxPlacement, position };
    }
    const position = getPositionOfPlacement(placement, target, overlay);
    const topBottom = position.top < 0 || (position.bottom ?? 0) < 0;
    const leftRight = position.left < 0 || (position.right ?? 0) < 0;
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
  }
};
interface Props {
  placement: Placement;
  eventListener?: string;
}

export function usePopoverPosition(
  props: Props,
  targetRef: React.RefObject<HTMLDivElement>,
  overlayRef: React.RefObject<HTMLDivElement>,
) {
  const layout = React.useContext(layoutContext);
  const [position, setPosition] = React.useState<Position>();
  const [show, setShow] = React.useState(false);
  const physicalPosition = getPhysicalPosition(layout.dir ?? 'ltr', props.placement) as PositionKeys;
  const [placement, setPlacement] = React.useState<PositionKeys>(physicalPosition);

  const onClickHandle = () => {
    setShow(false);
  };

  const positionHandle = () => {
    const data = getAdjustmentPlacement(physicalPosition, targetRef, overlayRef);
    if (data) {
      setPosition(data.position);
      setPlacement(data.placement);
    }
  };

  React.useEffect(() => {
    if (show) {
      positionHandle();
      window.addEventListener('resize', positionHandle);
      window.addEventListener('orientationchange', positionHandle);
      layout.addEventListener('scroll', positionHandle);
      window.addEventListener('click', onClickHandle);
      if (props.eventListener) {
        document.querySelector(props.eventListener)?.addEventListener('scroll', positionHandle);
      }

      return () => {
        window.removeEventListener('click', onClickHandle);
        window.removeEventListener('resize', positionHandle);
        window.removeEventListener('orientationchange', positionHandle);
        layout.removeEventListener('scroll', positionHandle);
        if (props.eventListener) {
          document.querySelector(props.eventListener)?.removeEventListener('scroll', positionHandle);
        }
      };
    }
  }, [show, overlayRef.current]);

  return { position, placement, show, setShow, positionHandle };
}

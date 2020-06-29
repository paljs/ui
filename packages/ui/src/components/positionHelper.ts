/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

const position1 = ['left', 'right', 'top', 'bottom'];
const position2 = ['start', 'end'];
const position3 = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'];
const position4 = ['topStart', 'topEnd', 'bottomStart', 'bottomEnd'];

type Dir = 'rtl' | 'ltr';

export function getPhysicalPosition(dir: Dir, position: string) {
  if (position1.includes(position) || position3.includes(position)) {
    return position;
  }
  switch (position) {
    case 'start':
      return dir === 'rtl' ? 'right' : 'left';
    case 'end':
      return dir === 'rtl' ? 'left' : 'right';
    case 'topStart':
      return dir === 'rtl' ? 'topRight' : 'topLeft';
    case 'topEnd':
      return dir === 'rtl' ? 'topLeft' : 'topRight';
    case 'bottomStart':
      return dir === 'rtl' ? 'bottomRight' : 'bottomLeft';
    case 'bottomEnd':
      return dir === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
  return position;
}

export function getLogicalPosition(dir: Dir, position: string) {
  if (position2.includes(position) || position4.includes(position)) {
    return position;
  }
  switch (position) {
    case 'right':
      return dir === 'rtl' ? 'start' : 'end';
    case 'left':
      return dir === 'rtl' ? 'end' : 'start';
    case 'topRight':
      return dir === 'rtl' ? 'topStart' : 'topEnd';
    case 'topLeft':
      return dir === 'rtl' ? 'topEnd' : 'topStart';
    case 'bottomRight':
      return dir === 'rtl' ? 'bottomStart' : 'bottomEnd';
    case 'bottomLeft':
      return dir === 'rtl' ? 'bottomEnd' : 'bottomStart';
  }
  return position;
}

export function isRightPosition(dir: Dir, position: string) {
  const physicalPosition = getPhysicalPosition(dir, position);
  return physicalPosition === 'topRight' || physicalPosition === 'bottomRight';
}

export function isTopPosition(dir: Dir, position: string) {
  const physicalPosition = getLogicalPosition(dir, position);
  return physicalPosition === 'topEnd' || physicalPosition === 'topStart';
}

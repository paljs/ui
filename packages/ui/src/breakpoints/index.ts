/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

export interface Breakpoint {
  xs?: number;
  is: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export type BreakPointKeys = keyof Breakpoint;
type CSSType = typeof css;

const gridSize = 12;
const gridGutter = 24;
const breakpoints: Breakpoint = {
  xs: 0,
  is: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
};

const maxContainer: Breakpoint = {
  is: 380,
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320,
  xxxl: 1500,
};

function getGridSize(theme: any): number {
  return theme.gridSize ?? gridSize;
}

function getGridGutter(theme: any): number {
  return theme.gridGutter ?? gridGutter;
}

function breakpointMin(name: BreakPointKeys): number | null {
  return breakpoints[name] !== 0 ? breakpoints[name]! : null;
}

function breakpointNext(index: number): BreakPointKeys | null {
  return index < Object.keys(breakpoints).length ? (Object.keys(breakpoints)[index + 1] as keyof Breakpoint) : null;
}

function ifWidthInBreakpoint(breakpoint: Array<BreakPointKeys> = []) {
  const bp = Object.keys(breakpoints) as Array<BreakPointKeys>;
  if (breakpoint === []) {
    return false;
  }
  let value = false;
  breakpoint
    .filter((b) => ~bp.indexOf(b))
    .sort((b1, b2) => bp.indexOf(b1) - bp.indexOf(b2))
    .forEach((b) => {
      const next = breakpointNext(bp.indexOf(b));
      if (window.innerWidth >= breakpoints[b]! && (next == null || window.innerWidth < breakpoints[next]!)) {
        value = true;
      }
    });
  return value;
}

function breakpointMax(name: BreakPointKeys) {
  const n = Object.keys(breakpoints).indexOf(name);
  const next = breakpointNext(n);
  if (!next) return null;
  const min = breakpointMin(next);
  if (!min) return null;
  return min - 0.2;
}

const breakpointDown: (name: BreakPointKeys) => CSSType = (name) => (first: any, ...args: any[]) => {
  const max = breakpointMax(name);
  if (max) {
    return css`
      @media (max-width: ${max}px) {
        ${css(first, ...args)}
      }
    `;
  } else {
    return css(first, ...args);
  }
};

const breakpointUp: (name: BreakPointKeys) => CSSType = (name) => (first: any, ...args: any) => {
  const min = breakpointMin(name);
  if (min) {
    return css`
      @media (min-width: ${min}px) {
        ${css(first, ...args)}
      }
    `;
  } else {
    return css(first, ...args);
  }
};

const breakpointBetween: (lower: BreakPointKeys, upper: BreakPointKeys) => CSSType = (lower, upper) => (
  first: any,
  ...args: any[]
) => {
  const min = breakpointMin(lower);
  const max = breakpointMax(upper);
  if (min != null && max != null) {
    return css`
      @media (min-width: ${min}px) and (max-width: ${max}px) {
        ${css(first, ...args)}
      }
    `;
  } else if (max == null) {
    return breakpointUp(lower)(first, ...args);
  } else if (min == null) {
    return breakpointDown(upper)(first, ...args);
  } else {
    return css(first, ...args);
  }
};

const breakpointOnly: (name: BreakPointKeys) => CSSType = (name) => (first: any, ...args: any[]) => {
  const min = breakpointMin(name);
  const max = breakpointMax(name);
  if (min != null && max != null) {
    return css`
      @media (min-width: ${min}px) and (max-width: ${max}px) {
        ${css(first, ...args)}
      }
    `;
  } else if (max == null) {
    return breakpointUp(name)(first, ...args);
  } else if (min == null) {
    return breakpointDown(name)(first, ...args);
  } else {
    return css(first, ...args);
  }
};

export {
  breakpointUp,
  breakpointDown,
  breakpointBetween,
  breakpointOnly,
  breakpoints,
  maxContainer,
  ifWidthInBreakpoint,
  getGridSize,
  getGridGutter,
};

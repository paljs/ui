import { css } from 'styled-components';
const gridSize = 12;
const gridGutter = 24;
const breakpoints = {
  xs: 0,
  is: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600
};

const maxContainer = {
  is: 380,
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320,
  xxxl: 1500
};
function ifWidthInBreakpoint(breakpoint = []) {
  const bp = Object.keys(breakpoints);
  let value = false;
  if (breakpoint === []) {
    return value;
  }
  breakpoint
    .filter(b => ~bp.indexOf(b))
    .sort((b1, b2) => bp.indexOf(b1) - bp.indexOf(b2))
    .map(b => {
      const next = breakpointNext(bp.indexOf(b));
      if (
        window.innerWidth >= breakpoints[b] &&
        (next == null || window.innerWidth < breakpoints[next])
      ) {
        value = true;
      }
    });
  return value;
}
function breakpointMin(name) {
  return breakpoints[name] != 0 ? breakpoints[name] : null;
}

function breakpointNext(index) {
  return index < Object.keys(breakpoints).length
    ? Object.keys(breakpoints)[index + 1]
    : null;
}

function breakpointMax(name) {
  const n = Object.keys(breakpoints).indexOf(name);
  const next = breakpointNext(n);
  return next ? breakpointMin(next) - 0.2 : null;
}

const breakpointDown = name => (...args) => {
  const max = breakpointMax(name);
  if (max) {
    return css`
      @media (max-width: ${max}px) {
        ${css(...args)}
      }
    `;
  } else {
    return css(...args);
  }
};
const breakpointUp = name => (...args) => {
  const min = breakpointMin(name);
  if (min) {
    return css`
      @media (min-width: ${min}px) {
        ${css(...args)}
      }
    `;
  } else {
    return css(...args);
  }
};

const breakpointBetween = (lower, upper) => (...args) => {
  const min = breakpointMin(lower);
  const max = breakpointMax(upper);
  if (min != null && max != null) {
    return css`
      @media (min-width: ${min}px) and (max-width: ${max}px) {
        ${css(...args)}
      }
    `;
  } else if (max == null) {
    return breakpointUp(lower)(...args);
  } else if (min == null) {
    return breakpointDown(upper)(...args);
  }
};

const breakpointOnly = name => (...args) => {
  const min = breakpointMin(name);
  const max = breakpointMax(name);
  if (min != null && max != null) {
    return css`
      @media (min-width: ${min}px) and (max-width: ${max}px) {
        ${css(...args)}
      }
    `;
  } else if (max == null) {
    return breakpointUp(name)(...args);
  } else if (min == null) {
    return breakpointDown(name)(...args);
  }
};

export {
  breakpointUp,
  breakpointDown,
  breakpointBetween,
  breakpointOnly,
  breakpoints,
  maxContainer,
  gridSize,
  gridGutter,
  ifWidthInBreakpoint
};

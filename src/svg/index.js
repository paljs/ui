import React from 'react';
import ArrowRightSvg from './ArrowRight.svg';
import ArrowLeftSvg from './ArrowLeft.svg';
import ArrowUpSvg from './ArrowUp.svg';
import ArrowDownSvg from './ArrowDown.svg';

function ArrowRight() {
  return <ArrowRightSvg />;
}

function ArrowUp() {
  return <ArrowUpSvg />;
}

function ArrowDown() {
  return <ArrowDownSvg />;
}

function ArrowLeft() {
  return <ArrowLeftSvg />;
}

export { ArrowRight, ArrowLeft, ArrowUp, ArrowDown };

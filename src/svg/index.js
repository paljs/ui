import React from 'react';
import { ReactComponent as ArrowRightSvg } from './ArrowRight.svg';
import { ReactComponent as ArrowLeftSvg } from './ArrowLeft.svg';
import { ReactComponent as ArrowUpSvg } from './ArrowUp.svg';
import { ReactComponent as ArrowDownSvg } from './ArrowDown.svg';

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

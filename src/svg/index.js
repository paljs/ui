import React from 'react';
import { ReactComponent as ArrowRightSvg } from './ArrowRight.svg';
import { ReactComponent as ArrowLeftSvg } from './ArrowLeft.svg';
import { ReactComponent as ArrowUpSvg } from './ArrowUp.svg';
import { ReactComponent as ArrowDownSvg } from './ArrowDown.svg';
import { ReactComponent as SearchSvg } from './Search.svg';
import { ReactComponent as CloseSvg } from './CloseCircled.svg';

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
function CloseCircled() {
  return <CloseSvg />;
}
function SearchIcon() {
  return <SearchSvg />;
}

export { ArrowRight, ArrowLeft, ArrowUp, ArrowDown, SearchIcon, CloseCircled };

import React from 'react';
import { ButtonTypes } from '../types';
import { ButtonLinkStyle, ButtonStyleC, ButtonStyle } from './style';

const Button: React.FC<ButtonTypes &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = props => (
  <ButtonStyleC {...props}>{props.children}</ButtonStyleC>
);

const ButtonLink: React.FC<ButtonTypes &
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = props => (
  <ButtonLinkStyle {...props}>{props.children}</ButtonLinkStyle>
);

const defaultProps: ButtonTypes = {
  size: 'Medium',
  status: 'Primary',
  appearance: 'filled',
  shape: 'Rectangle',
};

Button.defaultProps = defaultProps;
ButtonLink.defaultProps = defaultProps;

export { Button, ButtonLink, ButtonStyle };

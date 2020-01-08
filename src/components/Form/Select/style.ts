import styled, { css } from 'styled-components';
import { ButtonStyle } from '../../Button';
import { CardBody, CardStyle } from '../../Card';
import CheckboxStyle from '../Checkbox/style';
import { SelectPlacement } from './index';
import { componentAnimation } from '../../Shared';

const getBorder = (placement: SelectPlacement) => {
  const pos = placement === 'top' ? 'bottom' : 'top';
  return `border-${pos}-left-radius: 0;border-${pos}-right-radius: 0;`;
};

const Option = styled.div`
  ${({ theme }) => css`
    user-select: none;
    display: flex;
    ${componentAnimation('background-color, color')};

    &:hover {
      cursor: pointer;
    }

    ${CheckboxStyle} {
      display: flex;
      pointer-events: none;
      margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 0.5rem;
    }
    &:focus {
      outline: none;
    }
    &.selected {
      background-color: ${theme.selectOptionSelectedBackgroundColor};
      color: ${theme.selectOptionSelectedTextColor};
    }
    &:focus {
      background-color: ${theme.selectOptionFocusBackgroundColor};
      color: ${theme.selectOptionFocusTextColor};

      &.selected {
        background-color: ${theme.selectOptionSelectedFocusBackgroundColor};
        color: ${theme.selectOptionSelectedFocusTextColor};
      }
    }
    &:hover {
      background-color: ${theme.selectOptionHoverBackgroundColor};
      color: ${theme.selectOptionHoverTextColor};

      &.selected {
        background-color: ${theme.selectOptionSelectedHoverBackgroundColor};
        color: ${theme.selectOptionSelectedHoverTextColor};
      }
    }

    &.multiple {
      &.selected {
        background-color: ${theme.selectOptionBackgroundColor};
        color: ${theme.selectOptionTextColor};
      }
      &:focus {
        background-color: ${theme.selectOptionFocusBackgroundColor};
        color: ${theme.selectOptionFocusTextColor};
      }
    }
  `}
`;

const OptionGroup = styled.div`
  display: block;
  color: ${theme.selectGroupOptionTextColor};
  span {
    padding: 1.125rem 0.5rem;
    display: block;
  }

  &.disabled {
    pointer-events: none;
  }

  ${Option} {
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  }
`;

const SelectStyle = styled.div<SelectProps>`
  ${({ theme, opened, placement }) => css`
    display: block;
    button {
      position: relative;
      width: 100%;
      text-align: start;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border: none;
      transition: all 0.1s;
      ${ButtonStyle}

      &::after {
        top: 50%;
        ${theme.dir === 'rtl' ? 'left' : 'right'}: 0.75rem;
        position: absolute;
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }

      ${opened &&
        placement &&
        css`
            border-${placement}-left-radius: 0;
            border-${placement}-right-radius: 0;
          `}
    }
  `}
`;

const SelectCard = styled.div`
  ${({ theme, placement, status, position }) => css`
    position: absolute;
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 1px;
    min-height: 1px;
    top: 0;
    left: 0;
    .overlay-pane {
      position: absolute;
      pointer-events: auto;
      display: flex;
      max-width: 100%;
      max-height: 100%;
      box-sizing: border-box;
      ${!position && 'visibility: hidden;'}

      ${CardStyle} {
        background-color: ${theme.selectBg};
        max-height: ${theme.selectMaxHeight};
        margin-bottom: 0;
        box-shadow: none;
        ${CardBody} {
          padding: 0;
        }
        ${Option} {
          padding: ${theme.selectOptionPadding};
        }
        ${status &&
          css`
            border: ${theme.selectBorderWidth} solid ${theme[`color${status}`]};

            ${Option}:hover, ${Option}.selected {
              background-color: ${theme[`color${status}`]};
              color: ${theme.colorWhite};
            }
          `}
        ${getBorder(placement)}
        ${Option},
        ${OptionGroup} {
          background-color: ${theme.selectOptionBackgroundColor};
          color: ${theme.selectOptionTextColor};
          &.disabled {
            background-color: ${theme.selectOptionDisabledBackgroundColor};
            color: ${theme.selectOptionDisabledTextColor};
          }
        }
      } 
    }
  `}
`;

export { SelectCard, SelectStyle, Option, OptionGroup };

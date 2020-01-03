import styled, { css } from 'styled-components';
import { ButtonStyle } from '../../Button/style';
import { Card, CardBody } from '../../Card';
import CheckboxStyle from '../Checkbox/style';
import { Placement } from './index';

const getBorder = (placement: Placement) => {
  const pos = placement === 'top' ? 'bottom' : 'top';
  return `border-${pos}-left-radius: 0;border-${pos}-right-radius: 0;`;
};

const Option = styled.div`
  ${({ theme }) => css`
    display: block;

    &.disabled {
      pointer-events: none;
    }

    &:hover {
      cursor: pointer;
    }

    ${CheckboxStyle} {
      pointer-events: none;
      .description {
        color: inherit;
      }
    }
    &&.selected {
      ${CheckboxStyle} {
        .indicator {
          border-color: ${theme.selectCheckboxColor};

          &::before {
            border-color: ${theme.selectCheckmarkColor};
          }
        }
      }
    }
  `}
`;

const OptionGroup = styled.div`
  display: block;

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

const SelectStyle = styled.div`
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

      ${Card} {
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
          &.disabled {
            background-color: ${theme.selectOptionDisabledBg};
            opacity: ${theme.selectOptionDisabledOpacity};
          }
        }
      } 
    }
  `}
`;

export { SelectCard, SelectStyle, Option, OptionGroup };

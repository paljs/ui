import styled, { css } from 'styled-components';
import { adjustHue } from 'polished';

const ToastrStyle = styled.div`
  ${({ theme, status, destroyByClick, hasIcon, isRight }) => css`
    background-color: ${theme.toastrBg};
    padding: ${theme.toastrPadding};
    color: ${theme.toastrFg};
    border: ${theme.toastrBorder};
    border-radius: ${theme.toastrBorderRadius};
    display: flex;
    align-items: center;
    width: 25rem;
    margin: 0.5rem;
    opacity: 0.9;
    transition: all 150ms ease-out;
    &&.animation{
      transform: translateX(${!isRight && '-'}110%);
      height: 0;
      margin: 0;
    }

    .title {
      font-weight: 800;
      margin-right: 0.25rem;
    }
    > .content-container {
      line-height: 1.25;

      > .message {
        font-weight: 300;
      }
    }
    ${destroyByClick &&
      css`
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      `}
    .icon {
      font-size: 2rem;
      margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 1.25rem;
      padding-right: 0.7rem;
      padding-left: 0.7rem;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    i {
      border-radius: ${theme.toastrIconRadius};
    }

    ${theme.theme !== 'cosmic' && `box-shadow: ${theme.toastrShadow};`}

    ${status === 'Default' &&
      css`
        .content-container {
          display: flex;
          flex-direction: row;
        }
        border-color: ${theme.toastrBorderColor};
        padding: calc(${theme.toastrPadding} / 2) ${theme.toastrPadding};

        ${theme.theme === 'cosmic' &&
          css`
            color: ${theme.toastrColorFg};
            background-color: ${theme.toastrDefaultBackground};
          `}
      `}

    ${status !== 'Default' &&
      css`
        ${!hasIcon &&
          css`
            .content-container {
              display: flex;
              flex-direction: row;
            }
          `}
        border-color: ${theme[`color${status}`]};
        color: ${theme[`color${status}`]};

        i {
          background-color: ${theme[`color${status}`]};
          color: ${theme.colorWhite};
        }

        ${theme.theme === 'cosmic' &&
          css`
            background-image: linear-gradient(
              to right,
              ${leftColor(status, theme)},
              ${theme[`btn${status}Bg`]}
            );
            color: ${theme.toastrColorFg};

            i {
              background-color: ${theme.colorWhite};
              color: ${theme[`color${status}`]};
            }
          `}
      `}
  `}
`;

const heroPercentage = {
  Primary: 20,
  Success: 20,
  Warning: 10,
  Info: -10,
  Danger: -20,
  Secondary: 20
};

const leftColor = (status, theme) =>
  adjustHue(heroPercentage[status], theme[`btn${status}Bg`]);

const ToastrContainer = styled.div`
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 1000;
  ${({ position }) => {
    switch (position) {
      case 'topStart':
        return 'justify-content: flex-start;align-items: flex-start;';
      case 'topEnd':
        return 'justify-content: flex-end;align-items: flex-start;';
      case 'bottomStart':
        return 'justify-content: flex-start;align-items: flex-end;';
      case 'bottomEnd':
        return 'justify-content: flex-end;align-items: flex-end;';
    }
  }}
  .overlay-pane {
    pointer-events: auto;
    position: static;
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    .container {
      display: flex;
      flex-direction: ${({ isTop }) => (isTop ? 'column-reverse' : 'column')};
    }
  }
`;

export { ToastrStyle, ToastrContainer };

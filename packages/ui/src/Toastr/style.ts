import styled, { css } from 'styled-components';
import { Status } from '../types';
import { ThemeKey } from '@paljs/theme';

interface ToastrStyleProps {
  status?: Status;
  destroyByClick?: boolean;
  hasIcon?: boolean;
  isRight?: boolean;
}

const ToastrStyle = styled.div<ToastrStyleProps>`
  ${({ theme, status, destroyByClick, hasIcon, isRight }) => css`
    border-style: ${theme.toastrBorderStyle};
    border-radius: ${theme.toastrBorderRadius};
    border-width: ${theme.toastrBorderWidth};
    box-shadow: ${theme.toastrShadow};
    padding: ${theme.toastrPadding};
    display: flex;
    align-items: center;
    width: 25rem;
    margin: 0.5rem;
    transition: all 150ms ease-out;
    &&.animation{
      transform: translateX(${!isRight && '-'}110%);
      height: 0;
      margin: 0;
    }

    .content-container {
      ${
        !hasIcon &&
        css`
          display: flex;
          flex-direction: row;
        `
      }
      .title {
        font-weight: ${theme.toastrTitleTextFontWeight};
        font-family: ${theme.toastrTitleTextFontFamily};
        font-size: ${theme.toastrTitleTextFontSize};
        line-height: ${theme.toastrTitleTextLineHeight};
        margin-right: 0.25rem;
      }
      .message {
        font-family: ${theme.toastrTextFontFamily};
        font-weight: ${theme.toastrTextFontWeight};
        line-height: ${theme.toastrTextLineHeight};
        font-size: ${theme.toastrTextFontSize};
      }
    }
    ${
      destroyByClick &&
      css`
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      `
    }
    .icon {
      margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 1.25rem;
      border-radius: ${theme.toastrBorderRadius};
      min-width: 2.5rem;
      min-height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    ${
      status &&
      css`
        background: ${theme[`toastr${status}BackgroundColor` as ThemeKey]};
        border-color: ${theme[`toastr${status}BorderColor` as ThemeKey]};
        color: ${theme[`toastr${status}TextColor` as ThemeKey]};

        .title {
          color: ${theme[`toastr${status}TextColor` as ThemeKey]};
        }
        ${destroyByClick &&
        css`
          cursor: pointer;

          &:hover {
            background: ${theme[`toastrDestroyable${status}HoverBackgroundColor` as ThemeKey]};
            border-color: ${theme[`toastrDestroyable${status}HoverBorderColor` as ThemeKey]};
          }
        `}

        .icon {
          background: ${theme[`toastrIcon${status}BackgroundColor` as ThemeKey]};
          color: ${theme[`toastrIcon${status}Color` as ThemeKey]};
        }
      `
    }
  `}
`;

interface ToastrContainerProps {
  position: string;
  isTop: boolean;
}

const ToastrContainer = styled.div<ToastrContainerProps>`
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
    flex-direction: ${({ isTop }) => (isTop ? 'column-reverse' : 'column')};
  }
`;

export { ToastrStyle, ToastrContainer };

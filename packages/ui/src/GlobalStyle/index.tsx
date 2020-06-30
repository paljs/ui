/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';
import { ThemeKey } from '@paljs/theme';

const GlobalStyle = css`
  ${({ theme }) => css`
    html {
      box-sizing: border-box;
      font-size: 14px;
      direction: ${theme.dir && theme.dir};
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      padding: 0;
      text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
      -webkit-font-smoothing: antialiased;
    }
    #oah-layout.with-search .scrollable-container {
      position: relative;
      z-index: 0;
    }
    #oah-layout.rotate-layout {
      position: fixed;
      overflow: hidden;
      width: 100%;

      .scrollable-container {
        position: relative;
        z-index: 10001;

        transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
      }

      &.with-search .scrollable-container {
        transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        transform-origin: 50vw 50vh;
        transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);
        pointer-events: none;
      }
    }
    #oah-layout.column-curtain.with-search .layout {
      pointer-events: none;
    }
    #oah-layout.curtain .scrollable-container {
      position: relative;
      z-index: 0;
    }
    #oah-layout.modal-drop {
      .layout {
        position: relative;
        transition: transform 0.4s, opacity 0.4s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      &.with-search .layout {
        opacity: 0;
        transform: scale3d(0.9, 0.9, 1);
        pointer-events: none;
      }
    }

    #oah-layout.modal-half {
      .layout {
        transition: transform 0.6s, opacity 0.6s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      &.with-search {
        .layout {
          transform: scale3d(0.8, 0.8, 1);
          pointer-events: none;
        }
      }
    }

    #oah-layout.modal-move {
      .layout {
        transition: transform 0.5s;
      }
      &.with-search {
        .layout {
          transform: scale3d(0.8, 0.8, 1);
          pointer-events: none;
        }
      }
    }
    body {
      color: ${theme.textBasicColor};
      font-family: ${theme.textParagraphFontFamily};
      font-size: ${theme.textParagraphFontSize};
      font-weight: ${theme.textParagraphFontWeight};
      line-height: ${theme.textParagraphLineHeight};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
      color: ${theme.textBasicColor};
    }

    ${[1, 2, 3, 4, 5, 6].map(
      (size) => css`
        h${size}, .h${size} {
          font-size: ${theme[`textHeading${size}FontSize` as ThemeKey]};
          font-family: ${theme[`textHeading${size}FontFamily` as ThemeKey]};
          font-weight: ${theme[`textHeading${size}FontWeight` as ThemeKey]};
          line-height: ${theme[`textHeading${size}LineHeight` as ThemeKey]};
        }
      `,
    )}

    .subtitle,
  .subtitle-2 {
      color: ${theme.textBasicColor};
    }

    .subtitle {
      font-family: ${theme.textSubtitleFontFamily};
      font-size: ${theme.textSubtitleFontSize};
      font-weight: ${theme.textSubtitleFontWeight};
      line-height: ${theme.textSubtitleLineHeight};
    }

    .subtitle-2 {
      font-family: ${theme.textSubtitle2FontFamily};
      font-size: ${theme.textSubtitle2FontSize};
      font-weight: ${theme.textSubtitle2FontWeight};
      line-height: ${theme.textSubtitle2LineHeight};
    }

    p,
    .paragraph {
      color: ${theme.textBasicColor};
      font-family: ${theme.textParagraphFontFamily};
      font-size: ${theme.textParagraphFontSize};
      font-weight: ${theme.textParagraphFontWeight};
      line-height: ${theme.textParagraphLineHeight};
    }

    .paragraph-2 {
      color: ${theme.textBasicColor};
      font-family: ${theme.textParagraph2FontFamily};
      font-size: ${theme.textParagraph2FontSize};
      font-weight: ${theme.textParagraph2FontWeight};
      line-height: ${theme.textParagraph2LineHeight};
    }

    a {
      color: ${theme.linkTextColor};
      text-decoration: ${theme.linkTextDecoration};
      font-size: inherit;
      font-style: inherit;
      font-weight: inherit;
      line-height: inherit;

      &:focus {
        color: ${theme.linkTextFocusColor};
      }

      &:hover {
        color: ${theme.linkTextHoverColor};
      }

      &.link-control,
      &.link-control:hover {
        color: ${theme.textControlColor};
      }

      &.link-alternate,
      &.link-alternate:hover {
        color: ${theme.textAlternateColor};
      }
    }

    .label {
      color: ${theme.textHintColor};
      font-family: ${theme.textLabelFontFamily};
      font-size: ${theme.textLabelFontSize};
      font-weight: ${theme.textLabelFontWeight};
      line-height: ${theme.textLabelLineHeight};
    }

    .caption {
      font-family: ${theme.textCaptionFontFamily};
      font-size: ${theme.textCaptionFontSize};
      font-weight: ${theme.textCaptionFontWeight};
      line-height: ${theme.textCaptionLineHeight};
    }

    .caption-2 {
      font-family: ${theme.textCaption2FontFamily};
      font-size: ${theme.textCaption2FontSize};
      font-weight: ${theme.textCaption2FontWeight};
      line-height: ${theme.textCaption2LineHeight};
    }

    .caption,
    .caption-2 {
      color: ${theme.textHintColor};
      ${['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Control', 'Basic'].map(
        (status) => css`
          &.status-${status} {
            color: ${theme[`text${status}Color` as ThemeKey]};
          }
        `,
      )}
    }

    li {
      color: ${theme.listItemTextColor};
      font-family: ${theme.listItemFontFamily};
      font-size: ${theme.listItemFontSize};
      font-weight: ${theme.listItemFontWeight};
      line-height: ${theme.listItemLineHeight};
    }

    .text-alternate {
      color: ${theme.textAlternateColor};
    }
    .text-disabled {
      color: ${theme.textDisabledColor};
    }
    .text-hint {
      color: ${theme.textHintColor};
    }
    ${['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Control', 'Basic'].map(
      (status) => css`
        .text-${status} {
          color: ${theme[`text${status}Color` as ThemeKey]};
        }
      `,
    )}
    .visually-hidden {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
  `}
`;
export default GlobalStyle;

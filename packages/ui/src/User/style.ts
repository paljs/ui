/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';
import { UserProps } from './index';
import { ThemeKey } from '@paljs/theme';

const UserStyle = styled.div<UserProps>`
  ${({ theme, size, image, color, shape }) => css`
    display: flex;

    .user-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .user-picture {
      background-color: ${theme.userPictureBoxBackgroundColor};
      border: ${theme.userPictureBoxBorderWidth} solid ${theme.userPictureBoxBorderColor};
      position: relative;
      border-radius: 50%;
      flex-shrink: 0;

      &.initials {
        color: ${theme.userInitialsTextColor};
        font-family: ${theme.userInitialsTextFontFamily};
        font-weight: ${theme.userInitialsTextFontWeight};
        display: flex;
        align-items: center;
        justify-content: center;
        ${color && `background-color: ${color};`}
      }
      &.image {
        background-size: cover;
        background-repeat: no-repeat;
      ${image && `background-image: ${image};`}
      }
    }

    .user-name {
      color: ${theme.userNameTextColor};
      font-family: ${theme.userNameTextFontFamily};
      font-weight: ${theme.userNameTextFontWeight};
    }

    .user-title {
      color: ${theme.userTitleTextColor};
      font-family: ${theme.userTitleTextFontFamily};
      font-weight: ${theme.userTitleTextFontWeight};
      font-size: 0.75rem;
    }

    .user-name,
    .user-title {
      text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
    }

    .info-container {
      margin-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
    }

    ${
      size &&
      css`
        .user-picture {
          height: ${theme[`user${size}Height` as ThemeKey]};
          width: ${theme[`user${size}Width` as ThemeKey]};
        }
        .initials {
          font-size: ${theme[`user${size}InitialsTextFontSize` as ThemeKey]};
          line-height: ${theme[`user${size}InitialsTextLineHeight` as ThemeKey]};
        }
        .user-name {
          font-size: ${theme[`user${size}NameTextFontSize` as ThemeKey]};
          line-height: ${theme[`user${size}NameTextLineHeight` as ThemeKey]};
        }
        .user-title {
          font-size: ${theme[`user${size}TitleTextFontSize` as ThemeKey]};
          line-height: ${theme[`user${size}TitleTextLineHeight` as ThemeKey]};
        }
      `
    }

      ${
        shape &&
        css`
          .user-picture {
            border-radius: ${theme[`user${shape}BorderRadius` as ThemeKey]};
          }
        `
      }
  `}
`;

export default UserStyle;

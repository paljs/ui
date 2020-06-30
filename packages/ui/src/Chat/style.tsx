import styled, { css } from 'styled-components';
import { ChatProps } from './types';
import { scrollbars } from '../utils';
import { ThemeKey } from '@paljs/theme';

const MessageTextStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    .sender {
      font-size: 0.875rem;
      color: ${theme.chatMessageSenderTextColor};
      margin-bottom: 0.5rem;
    }
    p {
      word-wrap: break-word;
      word-break: break-all;
      max-width: 100%;
      margin: 0;
    }
    .text {
      padding: 1rem;
      border-radius: 0.5rem;
    }
  `}
`;

const MessageFileStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    a {
      color: ${theme.chatMessageFileTextColor};
        background: ${theme.chatMessageFileBackgroundColor};
      font-size: 4rem;
      text-align: center;
      border: 1px solid ${theme.chatMessageFileTextColor};
      width: 10rem;
      height: 10rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 0.5rem;
      &:hover,
      &:focus {
        text-decoration: none;
        color: ${theme.chatMessageFileTextColor};
      }
      div {
        background-size: cover;
        width: 100%;
        height: 100%;
      }
    }
    ${MessageTextStyle} {
      display: block;
      margin-bottom: 0.5rem;
    }
    .message-content-group {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex-wrap: wrap;
      a {
        margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 1rem;
        margin-bottom: 1rem;
        width: 5rem;
        height: 5rem;
      }
    }
  `}
`;

const MessageQuoteStyle = styled.div`
  ${({ theme }) => css`
    p.quote {
      font-style: italic;
      font-size: 0.875rem;
      background: ${theme.chatMessageQuoteBackgroundColor};
      color: ${theme.chatMessageQuoteTextColor};
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .sender {
      font-size: 0.875rem;
      color: ${theme.chatMessageSenderTextColor};
      margin-bottom: 0.5rem;
    }
  `}
`;

const MessageStyle = styled.div<{ reply?: boolean }>`
  ${({ theme, reply }) => css`
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    .message {
      flex: 1;
    }
    .avatar {
      border-radius: 50%;
      flex-shrink: 0;
      background: ${theme.chatMessageAvatarBackgroundColor};
      background-size: 3.4rem 2.6rem;
      background: no-repeat center;
      width: 2.5rem;
      height: 2.5rem;
      text-align: center;
      line-height: 2.5rem;
      font-size: 0.875rem;
      color: white;
    }
    ${reply
      ? css`
      flex-direction: row-reverse;
      .message {
        margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 0.5rem;
        margin-${theme.dir === 'rtl' ? 'right' : 'left'}: 3rem;
      }
      ${MessageTextStyle} {
        align-items: flex-end;
        .sender {
          text-align: ${theme.dir === 'rtl' ? 'left' : 'right'};
        }
        .text {
          border-top-${theme.dir === 'rtl' ? 'left' : 'right'}-radius: 0;
          background: ${theme.chatMessageReplyBackgroundColor};
          color: ${theme.chatMessageReplyTextColor};
        }
      }
      ${MessageFileStyle} {
        align-items: flex-start;
      }
    `
      : css`
      .message {
        margin-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
        margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 3rem;
      }
      ${MessageTextStyle} {
        align-items: flex-start;
        .text {
          border-top-${theme.dir === 'rtl' ? 'right' : 'left'}-radius: 0;
          background: ${theme.chatMessageBackground};
          color: ${theme.chatMessageTextColor};
        }
      }
      ${MessageFileStyle} {
        align-items: flex-start;
      }
    `}
  `}
`;

interface FormProps {
  showButton: boolean;
  buttonIcon: boolean;
}

const FormStyle = styled.div<FormProps>`
  ${({ theme, showButton, buttonIcon }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.chatPadding};
    border-top: ${theme.chatDividerWidth} ${theme.chatDividerStyle} ${theme.chatDividerColor};
    .message-row {
      flex-direction: row;
      display: flex;
    }
    input {
      flex: 1;
      padding: 1.25rem 1.5rem;
      border-radius: 2rem;
      outline: none;
      box-sizing: border-box;
      ${
        showButton &&
        css`
        border-top-${theme.dir === 'rtl' ? 'left' : 'right'}-radius: 0;
        border-bottom-${theme.dir === 'rtl' ? 'left' : 'right'}-radius: 0;
      `
      }
    }

    .send-button {
      border-radius: 3rem;
      border-top-${theme.dir === 'rtl' ? 'right' : 'left'}-radius: 0;
      border-bottom-${theme.dir === 'rtl' ? 'right' : 'left'}-radius: 0;

      ${
        buttonIcon &&
        css`
          font-size: 3rem;
        `
      }
    }

    .dropped-files {
      display: flex;
      flex-direction: row;
      margin-bottom: 0.5rem;
      flex-wrap: wrap;

      div {
        background-size: cover;
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
        margin-${theme.dir === 'rtl' ? 'left' : 'right'}: 0.5rem;
        margin-bottom: 0.5rem;
        text-align: center;
        line-height: 3rem;
        font-size: 2rem;
        position: relative;

        .remove {
          position: absolute;
          right: -0.5rem;
          top: -0.875rem;
          font-size: 0.875rem;
          line-height: 1;
          cursor: pointer;
        }
      }
    }
  `}
`;

const ChatStyle = styled.div<ChatProps>`
  ${({ theme, size, status }) => css`
    background-color: ${theme.chatBackgroundColor};
    border: ${theme.chatBorder};
    border-radius: ${theme.chatBorderRadius};
    box-shadow: ${theme.chatShadow};
    color: ${theme.chatTextColor};
    font-family: ${theme.chatTextFontFamily};
    font-size: ${theme.chatTextFontSize};
    font-weight: ${theme.chatTextFontWeight};
    line-height: ${theme.chatTextLineHeight};
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    header {
      border-bottom: ${theme.chatDividerWidth} ${theme.chatDividerStyle} ${theme.chatDividerColor};
      border-top-left-radius: ${theme.chatBorderRadius};
      border-top-right-radius: ${theme.chatBorderRadius};
      padding: ${theme.chatPadding};
      font-family: ${theme.chatHeaderTextFontFamily};
      font-size: ${theme.chatHeaderTextFontSize};
      font-weight: ${theme.chatHeaderTextFontWeight};
      line-height: ${theme.chatHeaderTextLineHeight};
    }

    .scrollable {
      overflow: auto;
      flex: 1;
      ${scrollbars(theme.chatScrollbarColor, theme.chatScrollbarBackgroundColor, theme.chatScrollbarWidth)}
    }

    .messages {
      padding: ${theme.chatPadding};
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
    }

    .no-messages {
      text-align: center;
    }

    ${size && `height: ${theme[`chat${size}Height` as ThemeKey]};`}
    ${status &&
    css`
      header {
        background-color: ${theme[`chat${status}BackgroundColor` as ThemeKey]};
        color: ${theme[`chat${status}TextColor` as ThemeKey]};
      }
    `}
  `}
`;

export { ChatStyle, FormStyle, MessageStyle, MessageFileStyle, MessageQuoteStyle, MessageTextStyle };

import styled, { css } from 'styled-components';

const ChatStyle = styled.div`
  ${({ theme, size, status }) => css`
    font-size: ${theme.chatFontSize};
    background: ${theme.chatBg};
    border-radius: ${theme.chatBorderRadius};
    box-shadow: ${theme.chatShadow};
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    header {
      color: ${theme.chatFg};
      padding: ${theme.chatPadding};
      border-bottom: 1px solid ${theme.chatSeparator};
      border-top-left-radius: ${theme.chatBorderRadius};
      border-top-right-radius: ${theme.chatBorderRadius};
      font-weight: ${theme.fontWeightBolder};
    }

    .scrollable {
      overflow: auto;
      flex: 1;
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
      font-size: 0.875rem;
      text-align: center;
    }

    ${size && `height: ${theme[`chatHeight${size}`]};`}
    ${status &&
      css`
        header {
          background-color: ${theme[`chat${status}Bg`]};
          color: ${theme[`chat${status}Fg`]};
        }
        ${FormStyle} button.btn {
          background-color: ${theme[`chat${status}Bg`]};
          ${status === 'Disabled' &&
            css`
              border: 1px solid ${theme.chatFormBorder};
              color: ${theme.chatDisabledFg};
            `}
        }
      `}
  `}
`;

const FormStyle = styled.div`
  ${({ theme, fileOver, showButton, buttonIcon }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.chatPadding};
    border-top: 1px solid ${theme.chatSeparator};
    .message-row {
      flex-direction: row;
      display: flex;
    }
    input {
      flex: 1;
      padding: 1.25rem 1.5rem;
      border-radius: 2rem;
      border: 1px solid ${theme.chatFormBorder};
      background: ${theme.chatFormBg};
      color: ${theme.chatFormFg};
      outline: none;
      box-sizing: border-box;
      ${showButton &&
        css`
        border-top-${theme.dir === 'rtl' ? 'left' : 'right'}-radius: 0;
        border-bottom-${theme.dir === 'rtl' ? 'left' : 'right'}-radius: 0;
      `} 
      &::placeholder {
        color: ${theme.chatFormPlaceholderFg};
      }
    }

    button.btn {
      border-radius: 3rem;
      border-top-${theme.dir === 'rtl' ? 'right' : 'left'}-radius: 0;
      border-bottom-${theme.dir === 'rtl' ? 'right' : 'left'}-radius: 0;
      padding: 0 1.5rem;

      ${buttonIcon &&
        css`
          font-size: 3rem;
          line-height: 1;
          padding: 0 1.25rem 0 0.875rem;
          text-align: center;
        `}
    }

    ${fileOver &&
      css`
        input {
          border: 1px dashed ${theme.chatFormActiveBorder};
          box-shadow: 0 0 0 4px ${theme.chatFormBg};
          &::placeholder {
            color: ${theme.chatFormFg};
          }
        }
      `} 

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
        border: 1px solid ${theme.chatFormFg};
        text-align: center;
        line-height: 3rem;
        font-size: 2rem;
        color: ${theme.chatFormFg};
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

const MessageStyle = styled.div`
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
      background: ${theme.chatMessageAvatarBg};
      background-position: center;
      background-size: 3.4rem 2.6rem;
      background-repeat: no-repeat;
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
        margin-left: 0;
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
          background: ${theme.chatMessageReplyBg};
          color: ${theme.chatMessageReplyFg};
        }
      }
      ${MessageFileStyle} {
        align-items: flex-end;
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
          background: ${theme.chatMessageBg};
          color: ${theme.chatMessageFg};
        }
      }
      ${MessageFileStyle} {
        align-items: flex-start;
      }
    `}
  `}
`;

const MessageTextStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    .sender {
      font-size: 0.875rem;
      color: ${theme.chatMessageSenderFg};
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
      color: ${theme.chatMessageFileFg};
      background: ${theme.chatMessageFileBg};
      font-size: 4rem;
      text-align: center;
      border: 1px solid ${theme.chatMessageFileFg};
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
        color: ${theme.chatMessageFileFg};
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
      background: ${theme.chatMessageQuoteBg};
      color: ${theme.chatMessageQuoteFg};
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .sender {
      font-size: 0.875rem;
      color: ${theme.chatMessageSenderFg};
      margin-bottom: 0.5rem;
    }
  `}
`;
export {
  ChatStyle,
  FormStyle,
  MessageStyle,
  MessageFileStyle,
  MessageQuoteStyle,
  MessageTextStyle
};

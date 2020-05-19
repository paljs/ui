import React from 'react';
import { ChatStyle } from './style';
import ChatMessages from './Messages';
import ChatForm from './Form';
import { ChatProps } from './types';

const Chat: React.FC<ChatProps> = (props) => {
  return (
    <ChatStyle {...props}>
      <header>{props.title}</header>
      {props.children}
    </ChatStyle>
  );
};

Chat.defaultProps = {
  size: 'Medium',
  status: 'Primary',
};

export { Chat, ChatMessages, ChatForm };
export * from './types';

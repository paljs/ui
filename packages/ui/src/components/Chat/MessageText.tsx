import React from 'react';
import { MessageTextStyle } from './style';
import { MessageProps } from './types';

const MessageText: React.FC<MessageProps> = (props) => {
  return (
    <MessageTextStyle>
      {(props.sender || props.date) && (
        <p className="sender">
          {props.sender} <time>{props.date}</time>
        </p>
      )}
      {props.message && <p className="text"> {props.message}</p>}
    </MessageTextStyle>
  );
};

export default MessageText;

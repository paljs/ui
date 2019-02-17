import React from 'react';
import PropTypes from 'prop-types';
import { ChatStyle } from './style';
import ChatMessages from './Messages';
import ChatForm from './Form';
import { size, colorState } from '../types';

function Chat(props) {
  return (
    <ChatStyle {...props}>
      <header>{props.title}</header>
      {props.children}
    </ChatStyle>
  );
}
Chat.defaultProps = {
  size: 'LG',
  status: 'Primary'
};
Chat.propTypes = {
  title: PropTypes.string,
  size,
  status: colorState
};
export { Chat, ChatMessages, ChatForm };

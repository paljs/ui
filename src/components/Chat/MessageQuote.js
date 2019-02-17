import React from 'react';
import { MessageQuoteStyle } from './style';
import MessageText from './MessageText';

function MessageQuote(props) {
  return (
    <MessageQuoteStyle>
      {(props.sender || props.date) && (
        <p className="sender">
          {props.sender} <time>{props.date}</time>
        </p>
      )}
      <p className="quote">{props.quote}</p>
      <MessageText message={props.message} />
    </MessageQuoteStyle>
  );
}

export default MessageQuote;

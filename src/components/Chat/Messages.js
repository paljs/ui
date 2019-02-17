import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MessageFile from './MessageFile';
import MessageMap from './MessageMap';
import MessageText from './MessageText';
import MessageQuote from './MessageQuote';
import { MessageStyle } from './style';

function Messages(props) {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [props.messages]);
  const getMessageComponent = msg => {
    switch (msg.type) {
      case 'file':
        return (
          <MessageFile
            sender={msg.sender}
            message={msg.message}
            date={msg.date}
            files={msg.files}
          />
        );
      case 'map':
        return (
          <MessageMap
            sender={msg.sender}
            message={msg.message}
            date={msg.date}
            latitude={msg.latitude}
            longitude={msg.longitude}
            mapKey={props.mapKey}
          />
        );
      case 'quote':
        return (
          <MessageQuote
            sender={msg.sender}
            message={msg.message}
            date={msg.date}
            quote={msg.quote}
          />
        );

      default:
        return (
          <MessageText
            sender={msg.sender}
            message={msg.message}
            date={msg.date}
          />
        );
    }
  };
  const getInitials = name => {
    if (name) {
      const names = name.split(' ');

      return names
        .map(n => n.charAt(0))
        .splice(0, 2)
        .join('')
        .toUpperCase();
    }

    return '';
  };
  return (
    <div className="scrollable" ref={scrollRef}>
      <div className="messages">
        {props.messages.map((msg, index) => (
          <MessageStyle reply={msg.reply} key={index}>
            {!msg.reply && (
              <div
                className="avatar"
                style={{ backgroundImage: `url(${msg.avatar})` }}
              >
                {!msg.avatar && getInitials(msg.sender)}
              </div>
            )}
            <div className="message">{getMessageComponent(msg)}</div>
          </MessageStyle>
        ))}
        {!props.messages.length && (
          <p className="no-messages">
            {props.noMessages ? props.noMessages : 'No messages yet.'}
          </p>
        )}
      </div>
    </div>
  );
}
Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      message: PropTypes.string,
      date: PropTypes.string,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          icon: PropTypes.string,
          type: PropTypes.string
        })
      ),
      quote: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      avatar: PropTypes.string,
      type: PropTypes.oneOf(['text', 'file', 'map', 'quote'])
    })
  )
};
export default Messages;

import React from 'react';
import MessageFile from './MessageFile';

function MessageMap(props) {
  const file = {
    url: `https://maps.googleapis.com/maps/api/staticmap?center=${
      props.latitude
    },${props.longitude}&zoom=12&size=400x400&key=${props.mapKey}`,
    type: 'image/png',
    icon: props.icon
  };
  return (
    <MessageFile
      sender={props.sender}
      message={props.message}
      date={props.date}
      files={[file]}
    />
  );
}

export default MessageMap;

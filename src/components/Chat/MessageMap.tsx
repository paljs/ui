import React from 'react';
import MessageFile from './MessageFile';
import { MessageProps } from './types';

const MessageMap: React.FC<MessageProps & { mapKey?: string }> = (props) => {
  const file = {
    url: `https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=12&size=400x400&key=${props.mapKey}`,
    type: 'image/png',
    icon: '',
  };
  return <MessageFile sender={props.sender} message={props.message} date={props.date} files={[file]} />;
};

export default MessageMap;

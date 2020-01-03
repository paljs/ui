import { Chat, ChatForm, ChatMessages, MessageProps, AttachedFile } from '../../../../src';
import React, { useState } from 'react';
import defaultMessages from './messages';

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageProps[]>(defaultMessages);

  const onSendHandle = (v: { message: string; files: AttachedFile[] }) => {
    const files = !v.files
      ? []
      : v.files.map(file => {
          return {
            url: file.src as string,
            type: file.type,
            icon: 'document',
          };
        });
    const newMessage: MessageProps = {
      message: v.message,
      date: new Date().toLocaleTimeString(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files,
      sender: 'Ahmed Elywa',
      avatar: 'https://i.gifer.com/no.gif',
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <Chat title="Ahmed Elywa">
      <ChatMessages messages={messages} mapKey="API_KEY" />
      <ChatForm onSend={v => onSendHandle(v)} dropFiles filesIcon="document" />
    </Chat>
  );
}

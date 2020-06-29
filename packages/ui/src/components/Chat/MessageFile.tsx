import React from 'react';
import { MessageFileStyle } from './style';
import MessageText from './MessageText';
import { MessageProps, MessageFileType } from './types';

interface FileWithStyle extends MessageFileType {
  urlStyle: string;
  isImage: boolean;
}

const FileComponent: React.FC<FileWithStyle> = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {!props.urlStyle && <span className={props.icon} />}
      {props.isImage && <div style={{ backgroundImage: props.urlStyle }} />}
    </a>
  );
};

const MessageFile: React.FC<MessageProps> = (props) => {
  const isImages = (file: MessageFileType) => {
    return !!file.type && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
  };
  const readyFiles: FileWithStyle[] = props.files
    ? props.files.map((file) => {
        const isImage = isImages(file);
        return {
          ...file,
          urlStyle: isImage ? `url(${file.url})` : '',
          isImage,
        };
      })
    : [];

  return (
    <MessageFileStyle>
      <MessageText sender={props.sender} message={props.message} date={props.date} />
      {readyFiles.length > 1 ? (
        <div className="message-content-group">
          {readyFiles.map((file, index) => (
            <FileComponent key={index} {...file} />
          ))}
        </div>
      ) : (
        readyFiles.length === 1 && <FileComponent {...readyFiles[0]} />
      )}
    </MessageFileStyle>
  );
};

export default MessageFile;

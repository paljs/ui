import React from 'react';
import { MessageFileStyle } from './style';
import MessageText from './MessageText';
function MessageFile(props) {
  const isImages = file => {
    return ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
  };
  const readyFiles = () => {
    return props.files.map(file => {
      const isImage = isImages(file);
      return {
        ...file,
        urlStyle: isImage && `url(${file.url})`,
        isImage
      };
    });
  };

  return (
    <MessageFileStyle>
      <MessageText
        sender={props.sender}
        message={props.message}
        date={props.date}
      />
      {readyFiles().length > 1 ? (
        <div className="message-content-group">
          {readyFiles().map((file, index) => (
            <a
              key={index}
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {!file.urlStyle && <span className={file.icon} />}
              {file.isImage && (
                <div style={{ backgroundImage: file.urlStyle }} />
              )}
            </a>
          ))}
        </div>
      ) : (
        readyFiles().length === 1 && (
          <a
            href={readyFiles()[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {!readyFiles()[0].urlStyle && (
              <span className={readyFiles()[0].icon} />
            )}
            {readyFiles()[0].isImage && (
              <div style={{ backgroundImage: readyFiles()[0].urlStyle }} />
            )}
          </a>
        )
      )}
    </MessageFileStyle>
  );
}

export default MessageFile;

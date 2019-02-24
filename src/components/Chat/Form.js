import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FormStyle } from './style';

function ChatForm(props) {
  const [message, setMessage] = useState(props.message);
  const [files, setFiles] = useState([]);
  const [fileOver, setFileOver] = useState(false);
  const formRef = useRef();

  useEffect(
    () => {
      formRef.current.addEventListener('drop', onDropFile);
      formRef.current.addEventListener('dragover', onDragOver);
      formRef.current.addEventListener('dragleave', onDragLeave);
      return () => {
        formRef.current.removeEventListener('drop', onDropFile);
        formRef.current.removeEventListener('dragover', onDragOver);
        formRef.current.removeEventListener('dragleave', onDragLeave);
      };
    },
    [files]
  );

  const onDragOver = () => {
    setFileOver(true);
  };
  const onDragLeave = () => {
    setFileOver(false);
  };

  const onDropFile = e => {
    if (props.dropFiles) {
      e.preventDefault();
      e.stopPropagation();

      setFileOver(false);

      if (e.dataTransfer && e.dataTransfer.files) {
        const droppedFiles = [...files];
        for (let file of e.dataTransfer.files) {
          const res = file;

          if (props.imgDropTypes.includes(file.type)) {
            const fr = new FileReader();
            fr.onload = event => {
              res.src = event.target.result;
              res.urlStyle = `url(${res.src})`;
            };

            fr.readAsDataURL(file);
          }
          droppedFiles.push(res);
        }
        setTimeout(() => {
          setFiles(droppedFiles);
        }, 500);
      }
    }
  };

  const removeFile = file => {
    const droppedFiles = [...files];
    const index = droppedFiles.indexOf(file);
    if (index >= 0) {
      droppedFiles.splice(index, 1);
    }
    setFiles(droppedFiles);
  };

  const sendMessage = () => {
    if (files.length || String(message).trim().length) {
      typeof props.onSend === 'function' && props.onSend({ message, files });
      setMessage('');
      setFiles([]);
    }
  };

  return (
    <div className="form" ref={formRef}>
      <FormStyle
        fileOver={fileOver}
        buttonIcon={props.buttonIcon}
        showButton={props.showButton}
      >
        <div className="dropped-files">
          {files.map((file, index) => {
            return file.urlStyle ? (
              <div key={index} style={{ backgroundImage: file.urlStyle }}>
                <span className="remove" onClick={() => removeFile(file)}>
                  &times;
                </span>
              </div>
            ) : (
              <div key={index} className={props.filesIcon}>
                <span className="remove" onClick={() => removeFile(file)}>
                  &times;
                </span>
              </div>
            );
          })}
        </div>
        <div className="message-row">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={
              fileOver ? props.fileOverPlaceholder : props.placeholder
            }
            onKeyUp={e => {
              e.preventDefault();
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
          <button className="btn" onClick={sendMessage}>
            {props.buttonIcon ? (
              <span className={props.buttonIcon} />
            ) : (
              props.buttonTitle
            )}
          </button>
        </div>
      </FormStyle>
    </div>
  );
}
ChatForm.defaultProps = {
  imgDropTypes: ['image/png', 'image/jpeg', 'image/gif'],
  showButton: true,
  dropFiles: false,
  buttonTitle: 'Send',
  placeholder: 'Type a message',
  fileOverPlaceholder: 'Drop file to send'
};
ChatForm.propTypes = {
  imgDropTypes: PropTypes.array,
  message: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonIcon: PropTypes.string,
  showButton: PropTypes.bool,
  dropFiles: PropTypes.bool,
  onSend: PropTypes.func,
  placeholder: PropTypes.string,
  fileOverPlaceholder: PropTypes.string,
  filesIcon: PropTypes.string
};

export default ChatForm;

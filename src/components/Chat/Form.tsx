import React from 'react';
import { FormStyle } from './style';
import { ChatFormProps, AttachedFile } from './types';

const ChatForm: React.FC<ChatFormProps> = props => {
  const [message, setMessage] = React.useState<string>(props.message ?? '');
  const [files, setFiles] = React.useState<AttachedFile[]>([]);
  const [fileOver, setFileOver] = React.useState<boolean>(false);
  const formRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onDragOver = () => {
    inputRef.current?.focus();
    setFileOver(true);
  };

  const onDragLeave = () => {
    inputRef.current?.blur();
    setFileOver(false);
  };

  const onDropFile = (e: DragEvent) => {
    if (props.dropFiles) {
      e.preventDefault();
      e.stopPropagation();

      inputRef.current?.focus();
      setFileOver(true);

      if (e.dataTransfer && e.dataTransfer.files) {
        const droppedFiles = [...files];
        const _files = e.dataTransfer.files as File[];
        for (const file of _files) {
          const res = file;

          if (props.imgDropTypes.includes(file.type)) {
            const fr = new FileReader();
            fr.onload = event => {
              res.src = event.target?.result;
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

  React.useEffect(() => {
    if (formRef && formRef.current) {
      formRef.current.addEventListener('drop', onDropFile);
      formRef.current.addEventListener('dragover', onDragOver);
      formRef.current.addEventListener('dragleave', onDragLeave);
    }
    return () => {
      if (formRef && formRef.current) {
        formRef.current.removeEventListener('drop', onDropFile);
        formRef.current.removeEventListener('dragover', onDragOver);
        formRef.current.removeEventListener('dragleave', onDragLeave);
      }
    };
  }, [files]);

  const removeFile = (file: AttachedFile) => {
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
      <FormStyle buttonIcon={!!props.buttonIcon} showButton={props.showButton}>
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
            placeholder={fileOver ? props.fileOverPlaceholder : props.placeholder}
            onKeyUp={e => {
              e.preventDefault();
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
          <button className="btn" onClick={sendMessage}>
            {props.buttonIcon ? <span className={props.buttonIcon} /> : props.buttonTitle}
          </button>
        </div>
      </FormStyle>
    </div>
  );
};

ChatForm.defaultProps = {
  imgDropTypes: ['image/png', 'image/jpeg', 'image/gif'],
  showButton: true,
  dropFiles: false,
  buttonTitle: 'Send',
  placeholder: 'Type a message',
  fileOverPlaceholder: 'Drop file to send',
};

export default ChatForm;

import React from 'react';
import { FormStyle } from './style';
import { ChatFormProps, AttachedFile } from './types';
import { ItemIcon } from '../Icon';
import { Button } from '../Button';

const ChatForm: React.FC<ChatFormProps> = (props) => {
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
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          const res: AttachedFile = { ...e.dataTransfer.files[i], src: '', urlStyle: '' };

          if (props.imgDropTypes?.includes(e.dataTransfer.files[i].type)) {
            const fr = new FileReader();
            fr.onload = (event) => {
              res.src = event.target?.result;
              res.urlStyle = `url(${res.src})`;
            };

            fr.readAsDataURL(e.dataTransfer.files[i]);
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
      <FormStyle buttonIcon={!!props.buttonIcon} showButton={!!props.showButton}>
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
            onChange={(e) => setMessage(e.target.value)}
            placeholder={fileOver ? props.fileOverPlaceholder : props.placeholder}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
          <Button className="send-button" onClick={sendMessage}>
            {props.buttonIcon ? <ItemIcon icon={props.buttonIcon} /> : props.buttonTitle}
          </Button>
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

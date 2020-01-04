import { IconField, Size, Status } from '../types';

export interface MessageFileType {
  url: string;
  icon?: string;
  type?: string;
}

export interface MessageProps {
  sender?: string;
  message: string;
  date?: string;
  files?: MessageFileType[];
  quote?: string;
  latitude?: number;
  longitude?: number;
  avatar?: string;
  reply?: boolean;
  type?: 'text' | 'file' | 'map' | 'quote';
}

export interface MessagesProps {
  mapKey?: string;
  noMessages?: string;
  messages: MessageProps[];
}

export interface ChatProps {
  title: string;
  size?: Size;
  status?: Status;
}

export interface AttachedFile extends File {
  urlStyle: string;
  src?: string | ArrayBuffer | null;
}

export interface ChatFormProps {
  imgDropTypes?: string[];
  message?: string;
  buttonTitle?: string;
  buttonIcon?: IconField;
  showButton?: boolean;
  dropFiles?: boolean;
  onSend?: (data: { message: string; files: AttachedFile[] }) => void;
  placeholder?: string;
  fileOverPlaceholder?: string;
  filesIcon?: string;
}

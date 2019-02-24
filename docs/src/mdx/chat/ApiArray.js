export const chatProps = [
  {
    name: 'size',
    type: 'string',
    description:
      'Size of the component, XXS | XS | SM | MD | LG | XL | XXL default: LG'
  },
  {
    name: 'status',
    type: 'string',
    description:
      'Field status (adds specific styles): Info, Success, Warning, Danger, Primary default: Primary'
  },
  {
    name: 'title',
    type: 'string',
    description: 'text in top of chat'
  }
];

export const messagesProps = [
  {
    name: 'mapKey',
    type: 'string',
    description: 'Google Map Api key'
  },
  {
    name: 'messages',
    type: 'array of object ↓',
    description:
      'this props array contain object of all props under this line ↓'
  },
  {
    name: 'sender',
    type: 'string',
    description: 'message sender name'
  },
  {
    name: 'message',
    type: 'string',
    description: 'message content'
  },
  {
    name: 'date',
    type: 'date',
    description: 'time of send message send it with your format'
  },
  {
    name: 'files',
    type: 'array of file',
    description:
      'this array of file object {url: `file url`, icon: `file icon class`, type: `type of file`}'
  },
  {
    name: 'quote',
    type: 'string',
    description: 'Quoted message text'
  },
  {
    name: 'latitude',
    type: 'number',
    description: 'Map latitude'
  },
  {
    name: 'longitude',
    type: 'number',
    description: 'Map longitude'
  },
  {
    name: 'avatar',
    type: 'string',
    description: 'Message send avatar'
  },
  {
    name: 'reply',
    type: 'boolean',
    description: 'Determines if a message is a reply'
  },
  {
    name: 'type',
    type: 'string',
    description: 'Message type, available options text|file|map|quote'
  }
];

export const fromProps = [
  {
    name: 'imgDropTypes',
    type: 'array',
    description:
      'array of available image type default: [\'image/png\', \'image/jpeg\', \'image/gif\']'
  },
  {
    name: 'message',
    type: 'string',
    description: 'Predefined message text'
  },
  {
    name: 'buttonTitle',
    type: 'string',
    description: 'Send button title default: Send'
  },
  {
    name: 'buttonIcon',
    type: 'string',
    description: 'Send button icon class'
  },
  {
    name: 'showButton',
    type: 'boolean',
    description: 'Show send button default: true'
  },
  {
    name: 'dropFiles',
    type: 'boolean',
    description: 'user can drop files in input default: false'
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'placeholder of input default: Type a message'
  },
  {
    name: 'fileOverPlaceholder',
    type: 'string',
    description:
      'when user try to drop file will see fileOverPlaceholder of input default: Drop file to send'
  },
  {
    name: 'filesIcon',
    type: 'string',
    description:
      'image will see small preview but another file types need small icon you can send css class here'
  },
  {
    name: 'onSend()',
    type: 'function',
    description:
      'Callback with data object { message: `text`, files: `array of files` }'
  }
];

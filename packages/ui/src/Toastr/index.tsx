import ReactDOM from 'react-dom';
import React from 'react';
import layoutContext from '../Layout/layout-context';
import { getLogicalPosition } from '../utils';
import { ToastrContainer } from './style';
import Item from './Item';
import { Position, Status, IconField } from '../types';

export interface ToastrRef {
  add: (message: string, title: string, option?: ToastrProps | {}) => void;
}

export interface ToastrParent {
  position?: Position;
  status?: Status;
  duration?: number;
  hasIcon?: boolean;
  destroyByClick?: boolean;
  preventDuplicates?: boolean;
}

export interface ToastrItem extends ToastrParent {
  message: string;
  title: string;
  icon?: IconField;
}

export interface ToastrProps extends ToastrParent {
  icons?: Record<Status, IconField>;
  ref?: React.RefObject<ToastrRef>;
}

const Toastr = React.forwardRef<ToastrRef, ToastrProps>((props, ref) => {
  const [items, setItems] = React.useState<ToastrItem[]>([]);
  const [createParents, setCreateParents] = React.useState<boolean>(false);

  const layout = React.useContext(layoutContext);

  React.useEffect(() => {
    setCreateParents(true);
  }, []);

  React.useImperativeHandle(
    ref,
    () => ({
      add(message, title = '', option = {}) {
        const options: ToastrProps = { ...props, ...option };

        const newItems = [...items];
        let push = true;
        if (options.preventDuplicates) {
          for (const item of newItems) {
            if (item.title === title && item.message === message) {
              push = false;
            }
          }
        }

        if (push) {
          options.position = getLogicalPosition(layout.dir ?? 'ltr', options.position as string) as Position;

          newItems.push({
            ...options,
            title,
            message,
            icon: options.icons ? options.icons[options.status as Status] : '',
          });
          setItems(newItems);
        }
      },
    }),
    [items],
  );

  return (
    <>
      {createParents &&
        ['topStart', 'topEnd', 'bottomStart', 'bottomEnd'].map((position) =>
          ReactDOM.createPortal(
            <ToastrContainer position={position} isTop={position === 'topEnd' || position === 'topStart'}>
              <div className="overlay-pane" id={'toastr' + position} />
            </ToastrContainer>,
            document.getElementById('overlay-container')!,
          ),
        )}
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </>
  );
});

Toastr.displayName = 'Toastr';

Toastr.defaultProps = {
  position: 'topEnd',
  status: 'Primary',
  duration: 3000,
  hasIcon: true,
  destroyByClick: true,
  preventDuplicates: false,
  icons: {
    Danger: 'flash-outline',
    Success: 'checkmark-outline',
    Info: 'question-mark-outline',
    Warning: 'alert-triangle-outline',
    Primary: 'email-outline',
    Control: 'email-outline',
    Basic: 'email-outline',
  },
};

export { Toastr };

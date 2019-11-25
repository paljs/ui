import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import layoutContext from '../Layout/layout-context';
import { getLogicalPosition } from '../positionHelper';
import { ToastrContainer } from './style';
import Item from './Item';
import { position, statusArray } from '../types';

let Toastr = (props, ref) => {
  const [items, setItems] = React.useState([]);
  const [createParents, setCreateParents] = React.useState(false);

  const layout = React.useContext(layoutContext);

  React.useEffect(() => {
    setCreateParents(true);
  }, []);

  React.useImperativeHandle(
    ref,
    () => ({
      add(message, title = '', option = {}) {
        let options = { ...props, ...option };

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
          options.position = getLogicalPosition(layout.dir, options.position);

          options.icon =
            options.icon === undefined && options.icons
              ? options.icons[options.status]
              : options.icon;

          newItems.push({ ...options, title, message });
          setItems(newItems);
        }
      }
    }),
    [items]
  );

  return (
    <>
      {createParents &&
        ['topStart', 'topEnd', 'bottomStart', 'bottomEnd'].map(position =>
          ReactDOM.createPortal(
            <ToastrContainer
              position={position}
              isTop={position === 'topEnd' || position === 'topStart'}
            >
              <div className="overlay-pane" id={'toastr' + position} />
            </ToastrContainer>,
            document.getElementById('overlay-container')
          )
        )}
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </>
  );
};

Toastr = React.forwardRef(Toastr);

Toastr.defaultProps = {
  position: 'topEnd',
  status: 'Primary',
  duration: 3000,
  hasIcon: true,
  destroyByClick: true,
  preventDuplicates: false
};

Toastr.propTypes = {
  position,
  status: PropTypes.oneOf([...statusArray, 'Default']),
  duration: PropTypes.number,
  hasIcon: PropTypes.bool,
  destroyByClick: PropTypes.bool,
  preventDuplicates: PropTypes.bool,
  icons: PropTypes.object
};

export default Toastr;

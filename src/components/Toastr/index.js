import ReactDOM from 'react-dom';
import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useContext,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import layoutContext from '../Layout/layout-context';
import { getLogicalPosition } from '../positionHelper';
import { ToastrContainer } from './style';
import Item from './Item';
import { position, statusArray } from '../types';

const Toastr = forwardRef((props, ref) => {
  const [items, setItems] = useState([]);
  const [createParents, setCreateParents] = useState(false);

  const layout = useContext(layoutContext);

  useEffect(() => {
    setCreateParents(true);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      add(title, message, option = {}) {
        let options = { ...props.option, ...option };

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
    <Fragment>
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
    </Fragment>
  );
});

Toastr.defaultProps = {
  option: {
    position: 'topEnd',
    status: 'Primary',
    duration: 3000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false
  }
};

Toastr.propTypes = {
  option: PropTypes.shape({
    position,
    status: PropTypes.oneOf([...statusArray, 'Default']),
    duration: PropTypes.number,
    hasIcon: PropTypes.bool,
    destroyByClick: PropTypes.bool,
    preventDuplicates: PropTypes.bool,
    icons: PropTypes.object
  })
};

export default Toastr;

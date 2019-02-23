import ReactDOM from 'react-dom';
import React, { useState, useEffect, useContext } from 'react';

import layoutContext from '../Layout/layout-context';
import { ToastrStyle } from './style';
import { isRightPosition } from '../positionHelper';

export default function Item(props) {
  const [show, setShow] = useState(true);
  const [animation, setAnimation] = useState('animation');

  const layout = useContext(layoutContext);

  useEffect(() => {
    if (props.duration > 0) {
      setTimeout(() => {
        destroyItem();
      }, props.duration);
    }
    if (animation === 'animation') {
      setTimeout(() => {
        setAnimation('');
      }, 10);
    }
  }, []);

  const destroyItem = () => {
    setAnimation('animation');
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  const onClick = () => {
    if (props.destroyByClick) {
      destroyItem();
    }
  };
  return (
    show &&
    ReactDOM.createPortal(
      <ToastrStyle
        isRight={isRightPosition(layout.dir, props.position)}
        className={animation}
        onClick={onClick}
        {...props}
      >
        {props.icon && props.hasIcon && <i className={'icon ' + props.icon} />}
        <div className="content-container">
          {props.title && <span className="title">{props.title}</span>}
          <div className="message">{props.message}</div>
        </div>
      </ToastrStyle>,
      document.getElementById('toastr' + props.position)
    )
  );
}

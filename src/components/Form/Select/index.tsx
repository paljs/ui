import ReactDOM from 'react-dom';
import React from 'react';
import { Card, CardBody } from '../../Card';
import { Checkbox } from '../Checkbox';
import { SelectCard, SelectStyle, Option } from './style';
import { ButtonTypes } from '../../types';
import layoutContext from '../../Layout/layout-context';

export const Select: React.FC<SelectProps> = props => {
  const layout = React.useContext(layoutContext);
  const [options, setOptions] = React.useState([...props.options]);
  const [opened, setOpened] = React.useState(false);
  const [placement, setPlacement] = React.useState<SelectPlacement>('bottom');
  const [position, setPosition] = React.useState<Position>();

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (props.value) {
      const newOptions = [...options];
      for (const option of newOptions) {
        if (props.multiple) {
          option.selected = props.value.includes(option.value);
        } else {
          option.selected = props.value === option.value;
        }
      }
      setOptions(newOptions);
    }
  }, []);

  const positionHandle = () => {
    const target = targetRef.current?.getBoundingClientRect();
    const overlay = overlayRef.current?.getBoundingClientRect();
    if (target && overlay) {
      const data: { placement: SelectPlacement; position: Position } = {
        placement: 'bottom',
        position: { top: 0, left: target.left, maxHeight: 'none' },
      };

      if (overlay.height > window.innerHeight - target.bottom) {
        if (overlay.height < target.top) {
          data.placement = 'top';
        } else {
          data.position.maxHeight = window.innerHeight - target.bottom;
        }
      }
      data.position.top = data.placement === 'bottom' ? target.bottom : target.top - overlay.height;

      setPosition(data.position);
      setPlacement(data.placement);
    }
  };

  const onClickHandle = () => {
    setOpened(false);
  };

  React.useEffect(() => {
    if (opened) {
      window.addEventListener('click', onClickHandle);
      positionHandle();
      window.addEventListener('resize', positionHandle);
      layout.addEventListener('scroll', positionHandle);
      if (props.eventListener) {
        document.querySelector(props.eventListener)?.addEventListener('scroll', positionHandle);
      }
      return () => {
        window.removeEventListener('click', onClickHandle);

        window.removeEventListener('resize', positionHandle);
        layout.removeEventListener('scroll', positionHandle);

        if (props.eventListener) {
          document.querySelector(props.eventListener)?.removeEventListener('scroll', positionHandle);
        }
      };
    }
  }, [opened]);

  const onSelectMultiple = (i: number) => {
    const newOptions = [...options];
    newOptions[i].selected = !newOptions[i].selected;
    setOptions(newOptions);
    const selectedView = [];
    for (const option of newOptions) {
      option.selected && selectedView.push(option.value);
    }
    typeof props.onChange === 'function' && props.onChange(selectedView);
  };

  const onSelectHandle = (i: number) => {
    const newOptions = [...options];
    for (const key of newOptions.keys()) {
      newOptions[key].selected = i === key && newOptions[key].value;
    }
    typeof props.onChange === 'function' && props.onChange(newOptions[i].value);
    setOptions(newOptions);
    setOpened(false);
  };

  const placeholder = () => {
    const selectedView = [];
    for (const option of [...options]) {
      option.selected && selectedView.push(option.label);
    }
    if (selectedView.length <= 0) {
      return props.placeholder;
    } else if (props.customLabel) {
      return props.customLabel;
    } else {
      return selectedView.join(',');
    }
  };

  return (
    <>
      {opened &&
        ReactDOM.createPortal(
          <SelectCard placement={placement} status={props.status} position={position}>
            <div
              className="overlay-pane"
              style={position && { ...position }}
              ref={overlayRef}
              onClick={e => e.stopPropagation()}
            >
              <Card style={{ width: targetRef.current?.offsetWidth }}>
                <CardBody>
                  {options.map((option, index) => {
                    const className: string[] = [];
                    option.selected && className.push('selected');
                    option.disabled && className.push('disabled');
                    return props.multiple ? (
                      <Option key={index} className={className.join(' ')} onClick={() => onSelectMultiple(index)}>
                        <Checkbox checked={option.selected}>{option.label}</Checkbox>
                      </Option>
                    ) : (
                      <Option key={index} className={className.join(' ')} onClick={() => onSelectHandle(index)}>
                        {option.label}
                      </Option>
                    );
                  })}
                </CardBody>
              </Card>
            </div>
          </SelectCard>,
          document.getElementById('overlay-container')!,
        )}
      <SelectStyle {...props} opened={opened} placement={placement}>
        <button
          onClick={e => {
            e.stopPropagation();
            setOpened(!opened);
          }}
          ref={targetRef}
        >
          {placeholder()}
        </button>
      </SelectStyle>
    </>
  );
};

export type SelectPlacement = 'top' | 'bottom';
type Position = { top: number; left: number; maxHeight: string | number };

export interface SelectOption {
  value: any;
  label: any;
  selected?: boolean;
  disabled?: boolean;
}

export interface SelectProps extends ButtonTypes {
  options: SelectOption[];
  eventListener?: string;
  customLabel?: string;
  multiple?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  placeholder?: any;
  style?: React.CSSProperties;
  className?: string;
}

Select.defaultProps = {
  size: 'Medium',
  status: 'Primary',
  appearance: 'filled',
  shape: 'Rectangle',
};

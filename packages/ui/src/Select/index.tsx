import { DefaultTheme, withTheme } from 'styled-components';
import Select, { Props, StylesConfig } from 'react-select';
import React from 'react';
import { Shape, Status, Size } from '../types';
import { ThemeKey } from '@paljs/theme';

interface SelectMainProps {
  theme: DefaultTheme;
  shape?: Shape;
  status?: Status;
  size?: Size;
}

const customStyles: (props: SelectMainProps) => StylesConfig = ({ theme, status, shape, size }) => {
  const getThemeKey = (key: string) => {
    return theme[key as ThemeKey].toString();
  };
  return {
    control: (base, state) => {
      const { menuPlacement, isDisabled, menuIsOpen } = state.selectProps;
      const border = menuIsOpen
        ? menuPlacement === 'top'
          ? {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }
          : {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }
        : {};
      const disabled = isDisabled
        ? {
            color: getThemeKey(`selectOutline${status}DisabledTextColor`),
            backgroundColor: getThemeKey(`selectOutline${status}DisabledBackgroundColor`),
            borderColor: getThemeKey(`selectOutline${status}DisabledBorderColor`),
          }
        : {};
      return {
        ...base,
        borderStyle: getThemeKey('selectOutlineBorderStyle'),
        borderWidth: getThemeKey('selectOutlineBorderWidth'),
        borderRadius: getThemeKey(`select${shape}BorderRadius`),
        backgroundColor: getThemeKey(`selectOutline${status}BackgroundColor`),
        borderColor: getThemeKey(`selectOutline${status}BorderColor`),
        color: getThemeKey(`selectOutline${status}TextColor`),
        minHeight: 'auto',
        boxShadow: 'none',
        "div[class$='indicatorContainer']": {
          padding: getThemeKey(`selectOutline${size}Padding`),
        },
        '&:focus': {
          backgroundColor: getThemeKey(`selectOutline${status}FocusBackgroundColor`),
          borderColor: getThemeKey(`selectOutline${status}FocusBorderColor`),
        },
        '&:hover': {
          backgroundColor: getThemeKey(`selectOutline${status}HoverBackgroundColor`),
          borderColor: getThemeKey(`selectOutline${status}HoverBorderColor`),
        },
        ...disabled,
        ...border,
      };
    },
    menu: (base, state) => {
      const { menuPlacement, menuIsOpen } = state.selectProps;
      const border = menuIsOpen
        ? menuPlacement === 'top'
          ? {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }
          : {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }
        : {};
      return {
        ...base,
        margin: 0,
        boxShadow: getThemeKey('selectOptionsListShadow'),
        borderStyle: getThemeKey('selectOutlineBorderStyle'),
        borderWidth: getThemeKey('selectOutlineBorderWidth'),
        backgroundColor: getThemeKey(`selectOutline${status}BackgroundColor`),
        borderColor: getThemeKey(`selectOutline${status}BorderColor`),
        ...border,
      };
    },
    placeholder: (base) => ({
      ...base,
      color: getThemeKey(`selectOutline${status}PlaceholderTextColor`),
    }),
    singleValue: (base) => ({
      ...base,
      color: getThemeKey(`selectOutline${status}TextColor`),
    }),
    indicatorSeparator: (base) => ({
      ...base,
      color: getThemeKey(`selectOutline${status}PlaceholderTextColor`),
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: getThemeKey(`selectOutline${status}PlaceholderTextColor`),
    }),
    multiValue: (base) => ({
      ...base,
      borderRadius: getThemeKey(`select${shape}BorderRadius`),
    }),
    input: (base) => ({
      ...base,
      color: getThemeKey(`selectOutline${status}TextColor`),
    }),
    multiValueRemove: (base) => {
      const borderTop = theme.dir === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius';
      const borderBottom = theme.dir === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
      return {
        ...base,
        [borderTop]: getThemeKey(`select${shape}BorderRadius`),
        [borderBottom]: getThemeKey(`select${shape}BorderRadius`),
        color: getThemeKey(`selectOutline${status}PlaceholderTextColor`),
      };
    },
    option: (base, state) => {
      const optionStyle = state.isDisabled
        ? {
            backgroundColor: getThemeKey('selectOptionDisabledBackgroundColor'),
            color: getThemeKey('selectOptionDisabledTextColor'),
          }
        : state.isSelected
        ? {
            backgroundColor: state.isFocused
              ? getThemeKey('selectOptionSelectedFocusBackgroundColor')
              : getThemeKey('selectOptionSelectedBackgroundColor'),
            color: state.isFocused
              ? getThemeKey('selectOptionSelectedFocusTextColor')
              : getThemeKey('selectOptionSelectedTextColor'),
            '&:hover': {
              backgroundColor: getThemeKey('selectOptionSelectedHoverBackgroundColor'),
              color: getThemeKey('selectOptionSelectedHoverTextColor'),
            },
          }
        : {
            backgroundColor: state.isFocused
              ? getThemeKey('selectOptionFocusBackgroundColor')
              : getThemeKey('selectOptionBackgroundColor'),
            color: state.isFocused ? getThemeKey('selectOptionFocusTextColor') : getThemeKey('selectOptionTextColor'),
            '&:hover': {
              backgroundColor: getThemeKey('selectOptionHoverBackgroundColor'),
              color: getThemeKey('selectOptionHoverTextColor'),
            },
          };
      return {
        ...base,
        ...optionStyle,
        padding: getThemeKey(`selectOptionOutline${size}Padding`),
      };
    },
  };
};

const SelectMain: React.FC<Props & SelectMainProps> = (props) => {
  return <Select {...props} isRtl={props.theme.dir === 'rtl'} styles={customStyles(props)} />;
};

SelectMain.defaultProps = {
  shape: 'Rectangle',
  status: 'Basic',
  size: 'Medium',
};

const SelectMainWithTheme = withTheme(SelectMain);

const SelectWithTheme: React.FC<Props & Partial<SelectMainProps>> = (props) => {
  return <SelectMainWithTheme {...props} />;
};

export default SelectWithTheme;

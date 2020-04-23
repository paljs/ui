import { DefaultTheme, withTheme } from 'styled-components';
import Select, { Props, StylesConfig } from 'react-select';
import React from 'react';
import { Shape, Status, Size } from '../types';
import { ThemeKey } from '../../theme';

interface SelectMainProps {
  theme: DefaultTheme;
  shape?: Shape;
  status?: Status;
  size?: Size;
}

const customStyles: (props: SelectMainProps) => StylesConfig = ({ theme, status, shape, size }) => {
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
            color: theme[`selectOutline${status}DisabledTextColor` as ThemeKey],
            backgroundColor: theme[`selectOutline${status}DisabledBackgroundColor` as ThemeKey],
            borderColor: theme[`selectOutline${status}DisabledBorderColor` as ThemeKey],
          }
        : {};
      return {
        ...base,
        borderStyle: theme.selectOutlineBorderStyle,
        borderWidth: theme.selectOutlineBorderWidth,
        borderRadius: theme[`select${shape}BorderRadius` as ThemeKey],
        backgroundColor: theme[`selectOutline${status}BackgroundColor` as ThemeKey],
        borderColor: theme[`selectOutline${status}BorderColor` as ThemeKey],
        color: theme[`selectOutline${status}TextColor` as ThemeKey],
        boxShadow: 'none',
        '&:focus': {
          backgroundColor: theme[`selectOutline${status}FocusBackgroundColor` as ThemeKey],
          borderColor: theme[`selectOutline${status}FocusBorderColor` as ThemeKey],
        },
        '&:hover': {
          backgroundColor: theme[`selectOutline${status}HoverBackgroundColor` as ThemeKey],
          borderColor: theme[`selectOutline${status}HoverBorderColor` as ThemeKey],
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
        boxShadow: theme.selectOptionsListShadow,
        borderStyle: theme.selectOutlineBorderStyle,
        borderWidth: theme.selectOutlineBorderWidth,
        backgroundColor: theme[`selectOutline${status}BackgroundColor` as ThemeKey],
        borderColor: theme[`selectOutline${status}BorderColor` as ThemeKey],
        ...border,
      };
    },
    placeholder: (base) => ({
      ...base,
      color: theme[`selectOutline${status}PlaceholderTextColor` as ThemeKey],
    }),
    singleValue: (base) => ({
      ...base,
      color: theme[`selectOutline${status}TextColor` as ThemeKey],
    }),
    indicatorsContainer: (base) => ({
      ...base,
      padding: theme[`selectOutline${size}Padding` as ThemeKey],
    }),
    indicatorSeparator: (base) => ({
      ...base,
      color: theme[`selectOutline${status}PlaceholderTextColor` as ThemeKey],
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: theme[`selectOutline${status}PlaceholderTextColor` as ThemeKey],
    }),
    multiValue: (base) => ({
      ...base,
      borderRadius: theme[`select${shape}BorderRadius` as ThemeKey],
    }),
    multiValueRemove: (base) => {
      const borderTop = theme.dir === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius';
      const borderBottom = theme.dir === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
      return {
        ...base,
        [borderTop]: theme[`select${shape}BorderRadius` as ThemeKey],
        [borderBottom]: theme[`select${shape}BorderRadius` as ThemeKey],
        color: theme[`selectOutline${status}PlaceholderTextColor` as ThemeKey],
      };
    },
    option: (base, state) => {
      const optionStyle = state.isDisabled
        ? {
            backgroundColor: theme.selectOptionDisabledBackgroundColor,
            color: theme.selectOptionDisabledTextColor,
          }
        : state.isSelected
        ? {
            backgroundColor: state.isFocused
              ? theme.selectOptionSelectedFocusBackgroundColor
              : theme.selectOptionSelectedBackgroundColor,
            color: state.isFocused ? theme.selectOptionSelectedFocusTextColor : theme.selectOptionSelectedTextColor,
            '&:hover': {
              backgroundColor: theme.selectOptionSelectedHoverBackgroundColor,
              color: theme.selectOptionSelectedHoverTextColor,
            },
          }
        : {
            backgroundColor: state.isFocused
              ? theme.selectOptionFocusBackgroundColor
              : theme.selectOptionBackgroundColor,
            color: state.isFocused ? theme.selectOptionFocusTextColor : theme.selectOptionTextColor,
            '&:hover': {
              backgroundColor: theme.selectOptionHoverBackgroundColor,
              color: theme.selectOptionHoverTextColor,
            },
          };
      return {
        ...base,
        ...optionStyle,
        padding: theme[`selectOptionOutline${size}Padding` as ThemeKey],
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

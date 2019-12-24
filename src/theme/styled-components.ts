import * as styledComponents from 'styled-components';
import { ThemeTypes } from './themeTypes';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
  withTheme,
  ThemeConsumer,
  ThemeContext,
  isStyledComponent,
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeTypes>;

export default styled;
export {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
  withTheme,
  ThemeConsumer,
  ThemeContext,
  isStyledComponent,
  ServerStyleSheet,
  StyleSheetManager,
};

/* eslint-disable @typescript-eslint/no-use-before-define */
import { createTheme } from '../../../src';
import { DefaultTheme } from 'styled-components';

export default function themeService(theme: DefaultTheme['name']) {
  switch (theme) {
    case 'cosmic':
      return createTheme(theme, { ...shared, tableLink: '#fff' });
    case 'corporate':
    default:
      return createTheme(theme, shared);
  }
}

const shared: Partial<DefaultTheme> = {
  sidebarHeaderGap: '2rem',
  tableLink: '#4479e7',
  fontFamilyPrimary: `-apple-system,BlinkMacSystemFont,
          "Segoe UI",Roboto,"Helvetica Neue",
          Arial,sans-serif,"Apple Color Emoji",
          "Segoe UI Emoji","Segoe UI Symbol"`,
};

import 'styled-components';
import { ThemeObject } from '../../src';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {
    name: 'cosmic' | 'corporate' | 'dark' | 'default';
    dir: 'ltr' | 'rtl';
    sidebarHeaderGap: string;
    tableLink: string;
  }
}

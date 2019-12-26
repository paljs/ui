/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { DefaultTheme } from 'styled-components';
import cosmicTheme from './cosmic';
import corporateTheme from './corporate';
import darkTheme from './dark';
import defaultTheme from './default';
import mapping from './mapping';
import { ThemeObject, ThemeKeys, ThemeKey } from './themeTypes';

export * from './breakpoints';
export { ThemeObject, ThemeKeys, ThemeKey };

const themeValues = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  corporate: corporateTheme,
  dark: darkTheme,
};

function getKeyValue(settings: ThemeObject, key: keyof ThemeObject): ThemeKeys {
  if (settings[key] in settings) {
    getKeyValue(settings, settings[key] as keyof ThemeObject);
  }
  return settings[key];
}

function getThemeValue(settings: ThemeObject): ThemeObject {
  (Object.keys(settings) as Array<keyof ThemeObject>).forEach(key => {
    settings[key] = getKeyValue(settings, key);
  });
  return settings;
}

export function themes(theme: keyof typeof themeValues, settings: DefaultTheme): DefaultTheme {
  switch (theme) {
    case 'cosmic':
    case 'corporate':
    case 'dark':
      return {
        name: theme,
        dir: 'ltr',
        ...getThemeValue({
          ...defaultTheme,
          ...mapping,
          ...themeValues[theme],
          ...settings,
        }),
      };
    default:
      return {
        name: theme,
        dir: 'ltr',
        ...getThemeValue({ ...defaultTheme, ...mapping, ...settings }),
      };
  }
}

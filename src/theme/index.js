/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import cosmicTheme from './cosmic';
import corporateTheme from './corporate';
import defaultTheme from './default';
export * from './breakpoints';

const themeValues = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  corporate: corporateTheme
};

export function themes(theme, settings = {}) {
  switch (theme) {
    case 'cosmic':
    case 'corporate':
      return getThemeValue({
        ...defaultTheme,
        ...themeValues[theme],
        ...settings,
        theme
      });
    default:
      return getThemeValue({ ...defaultTheme, ...settings, theme });
  }
}

function getThemeValue(settings) {
  Object.keys(settings).forEach(key => {
    settings[key] = getKeyValue(settings, key);
  });
  return settings;
}

function getKeyValue(settings, key) {
  if (settings[settings[key]]) {
    return getKeyValue(settings, settings[key]);
  } else {
    return settings[key];
  }
}

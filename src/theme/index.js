/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import cosmicTheme from './cosmic';
import corporateTheme from './corporate';
import defaultTheme from './default';
export * from './breakpoints';

export function themes(theme, settings = {}) {
  switch (theme) {
    case 'default':
      return getThemeValue({ ...defaultTheme, ...settings });
    case 'cosmic':
      return getThemeValue({ ...defaultTheme, ...cosmicTheme, ...settings });
    case 'corporate':
      return getThemeValue({ ...defaultTheme, ...corporateTheme, ...settings });
  }
}

function getThemeValue(settings) {
  Object.keys(settings).map(key => {
    settings[key] = getKeyValue(settings, key);
  });
  return settings;
}

function getKeyValue(settings, key) {
  let value = '';
  if (settings[settings[key]]) {
    value = getKeyValue(settings, settings[key]);
  } else {
    value = settings[key];
  }
  return value;
}

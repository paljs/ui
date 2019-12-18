/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import cosmicTheme from './cosmic';
import corporateTheme from './corporate';
import darkTheme from './dark';
import defaultTheme from './default';
import mapping from './mapping';
export * from './breakpoints';

const themeValues = {
	default: defaultTheme,
	cosmic: cosmicTheme,
  corporate: corporateTheme,
  dark: darkTheme
};

export function themes(theme, settings = {}) {
	switch (theme) {
		case 'cosmic':
		case 'corporate':
		case 'dark':
			return getThemeValue({
				...defaultTheme,
				...mapping,
				...themeValues[theme],
				...settings,
				theme
			});
		default:
			return getThemeValue({ ...defaultTheme, ...mapping, ...settings, theme });
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

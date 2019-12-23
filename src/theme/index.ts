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
import { themeObject, themeKeys } from './themeTypes';
export * from './breakpoints';

const themeValues = {
	default: defaultTheme,
	cosmic: cosmicTheme,
  corporate: corporateTheme,
  dark: darkTheme
};
interface themeName {
	name: "cosmic" | "corporate" | "dark" | "default";
};

export function themes(theme: keyof typeof themeValues, settings: themeObject): themeObject & themeName {
	switch (theme) {
		case 'cosmic':
		case 'corporate':
		case 'dark':
			return {...getThemeValue({
				...defaultTheme,
				...mapping,
				...themeValues[theme],
				...settings
			}), name: theme};
		default:
			return {...getThemeValue({ ...defaultTheme, ...mapping, ...settings }), name: theme};
	}
}

function getThemeValue(settings: themeObject): themeObject {
	(Object.keys(settings) as Array<keyof themeObject>).forEach(key => {
		settings[key] = getKeyValue(settings, key);
	});
	return settings;
}

function getKeyValue(settings: themeObject, key: keyof themeObject): themeKeys {
	if (settings[key] in settings) {
		getKeyValue(settings, settings[key] as keyof themeObject);
	}
	return settings[key];
}

import cosmicTheme from '../../../../src/theme/cosmic';
import corporateTheme from '../../../../src/theme/corporate';
import defaultTheme from '../../../../src/theme/default';

const themeValues = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  corporate: corporateTheme,
};

export function getTheme(theme) {
  switch (theme) {
    case 'cosmic':
    case 'corporate':
      return getThemeParent({ ...defaultTheme, ...themeValues[theme] }, theme);
    default:
      return getThemeParent(defaultTheme, theme);
  }
}
function getThemeParent(settings, theme) {
  return Object.keys(settings).map(key => {
    return {
      key,
      value: getKeyValue(settings, key),
      default: !themeValues[theme][key],
      parent: settings[settings[key]] ? settings[key] : false,
    };
  });
}

function getKeyValue(settings, key) {
  if (settings[settings[key]]) {
    return getKeyValue(settings, settings[key]);
  } else {
    return settings[key];
  }
}

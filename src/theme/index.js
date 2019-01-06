import darkTheme from './dark';
import defaultTheme from './default';
export * from './breakpoints';

export function theme(theme, constant = {}, settings = {}) {
  if (theme === 'default') {
    return defaultTheme(constant, settings);
  } else if (theme === 'dark') {
    return darkTheme(constant, settings);
  }
}

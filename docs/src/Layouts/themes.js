import { themes } from 'oah-ui/theme';

export default function themeService(theme) {
  switch (theme) {
    case 'cosmic':
    case 'corporate':
    default:
      return themes(theme, {
        sidebarHeaderGap: '2rem',
        fontMain: `-apple-system,BlinkMacSystemFont,
          "Segoe UI",Roboto,"Helvetica Neue",
          Arial,sans-serif,"Apple Color Emoji",
          "Segoe UI Emoji","Segoe UI Symbol"`
      });
  }
}

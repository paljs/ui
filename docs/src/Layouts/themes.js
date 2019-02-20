import { themes } from 'oah-ui/theme';

export default function themeService(theme) {
  switch (theme) {
    case 'cosmic':
      return themes(theme, { ...shared, tableLink: '#fff' });
    case 'corporate':
    default:
      return themes(theme, shared);
  }
}

const shared = {
  sidebarHeaderGap: '2rem',
  tableLink: '#4479e7',
  fontMain: `-apple-system,BlinkMacSystemFont,
          "Segoe UI",Roboto,"Helvetica Neue",
          Arial,sans-serif,"Apple Color Emoji",
          "Segoe UI Emoji","Segoe UI Symbol"`
};

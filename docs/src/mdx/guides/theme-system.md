# OAH UI Theme System

OAH UI Theme System - set of `javaScript` object, which allows you to modify application look & feel by changing variables

- ability to flexibly change looks & feel of the application by managing variables, without changing css itself;
- ability to switch between visual themes in a runtime without reloading the page;
- ability to switch between directions rtl ltr.

## Theme Map

Each theme is represented as an javaScript map with a list of key-value pairs:

```js
export default {
  fontMain: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSecondary: 'fontMain',

  fontWeightThin: 200,
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightBolder: 500,
  fontWeightBold: 600,
  fontWeightUltraBold: 800,

  baseFontSize: '16px',

  fontSizeXlg: '1.25rem',
  fontSizeLg: '1.125rem',
  fontSize: '1rem',
  fontSizeSm: '0.875rem',
  fontSizeXs: '0.75rem',

  radius: '0.375rem',
  padding: '1.25rem',
  margin: '1.5rem',
  lineHeight: 1.25,

  colorBg: '#ffffff',
  colorBgActive: '#e9edf2',
  colorFg: '#a4abb3',
  colorFgHeading: '#2a2a2a',
  colorFgText: '#4b4b4b',
  colorFgHighlight: '#40dc7e',

  separator: '#ebeef2',

  colorGray: 'rgba(81, 113, 165, 0.15)',
  colorNeutral: 'transparent',
  colorWhite: '#ffffff',
  colorDisabled: 'rgba(255, 255, 255, 0.4)',

  colorPrimary: '#8a7fff',
  colorSuccess: '#40dc7e',
  colorInfo: '#4ca6ff',
  colorWarning: '#ffa100',
  colorDanger: '#ff4c6a',

  socialColorFacebook: '#3b5998',
  socialColorTwitter: '#55acee',
  socialColorGoogle: '#dd4b39',
  socialColorLinkedin: '#0177b5',
  socialColorGithub: '#6b6b6b',
  socialColorStackoverflow: '#2f96e8',
  socialColorDribble: '#f26798',
  socialColorBehance: '#0093fa',

  borderColor: 'colorGray',
  shadow: '0 2px 12px 0 #dfe3eb',

  linkColor: '#3dcc6d',
  linkColorHover: '#2ee56b',
  linkColorVisited: 'linkColor',

  scrollbarFg: '#dadada',
  scrollbarBg: '#f2f2f2',
  scrollbarWidth: '5px',
  scrollbarThumbRadius: '2.5px',

  radialGradient: 'none',
  linearGradient: 'none',
  ...
```

Where _key_ - is a variable name, and _value_ - is a raw css value (color, string, etc) or **parent variable name**, so that you can inherit values from different variables:

```js{3}
export default {
  fontMain: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSecondary: 'fontMain',
```

Here `fontSecondary` inherits its value from `fontMain`.

## Component Variables

Then, for each component of the OAH UI Components, there is a list of variables you can change.
For example - header component variables:

```js
  ...

  headerFontFamily: 'fontSecondary',
  headerFontSize: 'fontSize',
  headerLineHeight: 'lineHeight',
  headerFg: 'colorFgHeading',
  headerBg: 'colorBg',
  headerHeight: '4.75rem',
  headerPadding: '1.25rem',
  headerShadow: 'shadow',

  ...
```

As you can see, you have 8 variables for a pretty simple component and from the other side, 6 of them are inherited from the default values.
It means that if you want to create a new theme with a united look & feel of the components - in most cases you would need to change around 10 generic variables, such as `colorBg`, `shadow`, etc.
to change the UI completely.

List of component style variables is specified in the component documentation, for example [styles for header component](/components/layout/theme).

## Variables Usage

Now, if you want to use the variables in your custom style files, all you need to do (of course, after the [successful setup of the Theme System](/guides/enable-theme-system) is to call `${({theme}) => theme.headerBg}` function:

```js
import styled { css } from 'styled-components';
// You can use like this
const Header = styled.div`
  ${({theme}) => css`
    background: ${theme.headerBg};
    font-family: ${theme.headerFontFamily};
    font-size: ${theme.headerFontSize};
    line-height: ${theme.headerLineHeight};
  `}
`;
// or like this
const Header = styled.div`
  background: ${({theme}) => theme.headerBg};
`;
```

Depending on the currently enabled theme and the way `headerBg` inherited in your theme, you will get the right color.

## Built-in themes

Currently, there are 3 built-in themes:

- `default` - clean white theme
- `cosmic` - dark theme
- `corporate` - firm business theme

Themes can also be inherited from each other, `cosmic`, for instance, is inherited from the `default` theme.

## Magic of multiple themes with hot-reload

As you can see from the [oah-admin demo](https://oah-admin.oahtech.io/dashboard), you can switch themes in the runtime without reloading the page.
It is useful when you have multiple visual themes per user role or want to provide your user with such a configuration so that he can decide which theme works best for him.

## Related Articles

- [Enable Theme System](/guides/enable-theme-system)
- [Default Theme variables table](/themes/default)
- [Cosmic Theme variables table](/themes/cosmic)
- [Corporate Theme variables table](/themes/corporate)

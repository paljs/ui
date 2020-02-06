## Eva Design System Theme
In Eva Design System a **theme** is a set of semantic variables and connections between them, that represents the application's look & feel to achieves the following goals:

- create new visual themes easily;
- flexibly change look & feel of the application by managing variables, without changing components' styles;
- switch between visual themes in app runtime without page reload;
- support of CSS properties.

## A Theme

Each theme is represented as an javaScript map with a list of key-value pairs:

```js
export default {
  colorPrimary100: '#f2f6ff',
  colorPrimary200: '#d9e4ff',
  colorPrimary300: '#a6c1ff',
  colorPrimary400: '#598bff',
  //...
  colorPrimary900: '#091c7a',

  /* Basic colors - for backgrounds and borders and texts */
  colorBasic100: '#ffffff',
  colorBasic200: '#f7f9fc',
  colorBasic300: '#edf1f7',
  colorBasic400: '#e4e9f2',
  colorBasic500: '#c5cee0',
  //...
  colorBasic1100: '#101426',

  /* Status colors states - focus, hover, default, active, disabled  */

  colorBasicFocus: 'colorBasic400',
  colorBasicHover: 'colorBasic200',
  colorBasicDefault: 'colorBasic300',
  colorBasicActive: 'colorBasic400',
}
```

Where _key_ - is a variable name, and _value_ - is a raw css value (color, string, etc) or **parent variable name**, so that you can inherit values from different variables:

```js{2}
export default {
  colorBasicFocus: 'colorBasic400',
  colorBasicHover: 'colorBasic200',
```

Here `colorBasicFocus` inherits its value from `colorBasic400`.

Each theme is divided into the following semantic groups:

- Colors

- Backgrounds & Borders

- Text Colors

- Fonts & Text Styles

- General Theme Variables

## Colors

All available color within the theme. 5 semantic colors (`primary`, `success`, `info`, `warning`, `danger`), 6 transparency levels for every default semantic color (8%, 16%, 24%, 32%, 40%, 48%) and `basic` color (backgrounds and texts). Each color has a pallet of 9 shades, except for `basic`, which has 11 shades. These colors mostly used by `status` variants of the components.

Primary color shades:

```js
const theme = {
  colorPrimary100: '#f2f6ff',
  colorPrimary200: '#d9e4ff',
  colorPrimary300: '#a6c1ff',
  colorPrimary400: '#598bff',
  colorPrimary500: '#3366ff',
  colorPrimary600: '#274bdb',
  colorPrimary700: '#1a34b8',
  colorPrimary800: '#102694',
  colorPrimary900: '#091c7a',

  colorPrimaryTransparent100: 'rgba(51, 102, 255, 0.08)',
  colorPrimaryTransparent200: 'rgba(51, 102, 255, 0.16)',
  colorPrimaryTransparent300: 'rgba(51, 102, 255, 0.24)',
  colorPrimaryTransparent400: 'rgba(51, 102, 255, 0.32)',
  colorPrimaryTransparent500: 'rgba(51, 102, 255, 0.4)',
  colorPrimaryTransparent600: 'rgba(51, 102, 255, 0.48)',
}
```

You can also tune colors used for element states:

```js
const theme = {
  colorPrimaryFocus: 'colorPrimary600',
  colorPrimaryHover: 'colorPrimary400',
  colorPrimaryDefault: 'colorPrimary500',
  colorPrimaryActive: 'colorPrimary600',
  colorPrimaryDisabled: 'colorBasicTransparent300',
  colorPrimaryFocusBorder: 'colorPrimary700',
  colorPrimaryHoverBorder: 'colorPrimaryHover',
  colorPrimaryDefaultBorder: 'colorPrimaryDefault',
  colorPrimaryActiveBorder: 'colorPrimaryActive',
  colorPrimaryDisabledBorder: 'colorPrimaryDisabled',

  colorPrimaryTransparentFocus: 'colorPrimaryTransparent300',
  colorPrimaryTransparentHover: 'colorPrimaryTransparent200',
  colorPrimaryTransparentDefault: 'colorPrimaryTransparent100',
  colorPrimaryTransparentActive: 'colorPrimaryTransparent300',
  colorPrimaryTransparentDisabled: 'colorBasicTransparent200',
  colorPrimaryTransparentFocusBorder: 'colorPrimary500',
  colorPrimaryTransparentHoverBorder: 'colorPrimary500',
  colorPrimaryTransparentDefaultBorder: 'colorPrimary500',
  colorPrimaryTransparentActiveBorder: 'colorPrimary500',
  colorPrimaryTransparentDisabledBorder: 'colorBasicTransparent300',
}
```

You can adjust these settings for each of the colors, to make states use lighter or darker colors.

## Backgrounds & Borders

A theme has 3 backgrounds (`basic`, `alternative`, `primary`) each of 4 shades and also 3 borders, each of 5 shades (background shades count + 1). `basic` and `alternative` backgrounds and borders utilize `basic` color shades as a source. `primary` backgrounds and borders use `primary` color. Basic backgrounds and borders heavily used by components (cards, accordions, menu, etc), when alternative (tooltips) and primary only for particular use cases, to distinguish some of the components.

Basic backgrounds and borders:

```js
const theme = {
  backgroundBasicColor1: 'colorBasic100',
  backgroundBasicColor2: 'colorBasic200',
  backgroundBasicColor3: 'colorBasic300',
  backgroundBasicColor4: 'colorBasic400',

  borderBasicColor1: 'colorBasic100',
  borderBasicColor2: 'colorBasic200',
  borderBasicColor3: 'colorBasic300',
  borderBasicColor4: 'colorBasic400',
  borderBasicColor5: 'colorBasic500',
}
```

the most used of these are:

- `backgroundBasicColor1` - the lightest one, usually used for top sitting elements - cards, headers, etc.
- `backgroundBasicColor2` - for background of the layout and input controls (inputs, checkboxes, etc)

And vice-versa for dark themes:

```js
const dark = {
  backgroundBasicColor1: 'colorBasic800', // <- notice how we start
  backgroundBasicColor2: 'colorBasic900', // with the end part
  backgroundBasicColor3: 'colorBasic1000', // of the basic shades
  backgroundBasicColor4: 'colorBasic1100',

  borderBasicColor1: 'colorBasic800',
  borderBasicColor2: 'colorBasic900',
  borderBasicColor3: 'colorBasic1000',
  borderBasicColor4: 'colorBasic1100',
  borderBasicColor5: 'colorBasic1100',
}
```

## Text Colors
There are 5 colors within the theme: `basic` - main text color, used on top of `basic` backgrounds `alternate` - alternative color used on top of `alternate` backgrounds, `control` - used on top of `status` colors (`primary`, `success`, etc), `disabled` color - to indicate text/component disabled state and `hint` - for secondary texts (for example placeholders and captions).

Text colors use `basic` shades as a source:

```js
const theme = {
  textBasicColor: 'colorBasic800',
  textAlternateColor: 'colorBasic100',
  textControlColor: 'colorBasic100',
  textDisabledColor: 'colorBasicTransparent600',
  textHintColor: 'colorBasic600',
}
```

## Fonts & Text Styles
Each theme has two available fonts: `default` and `secondary`. `secondary` font used for headers, while the `default` for the rest of the elements.

There are 14 text styles:

- 6 `heading` styles, used by h1-h6 elements
- 2 `subtitle` styles, used as a text of most of controls (inputs, menus, etc)
- 2 `paragraph` styles, regular text
- 2 `caption` styles, used by smaller texts, like tooltip or input caption
- `label` style, used by label element
- `button` text style, used by button element

Each styles describes text `font-family`, `font-size`, `font-width` and `line-height`, for instance, caption text style:

```js
const theme = {
  textCaptionFontFamily: 'fontFamilyPrimary',
  textCaptionFontSize: '0.75rem',
  textCaptionFontWeight: 400,
  textCaptionLineHeight: '1rem',
}
```

Adjust these styles to change text style of specific groups of elements.

### General Theme Variables
This section contains other supporting theme variables, such as `borderRadius`, `outlineWidth` & `outlineColor`, `shadow`, etc.

## Related Articles

- [Enable Theme System](/themes/enable-theme-system)
- [Default Theme variables table](/themes/default)
- [Cosmic Theme variables table](/themes/cosmic)
- [Corporate Theme variables table](/themes/corporate)

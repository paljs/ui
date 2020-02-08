# OAH UI Typography

The main goal of typography is to describe how design is applied to letters and text. OAH UI Typography is based on [Eva Design System](https://eva.design/) specification.

## Font Family

OAH UI theme contains two font-family properties:

- **fontFamilyPrimary** - utilized by all text elements on the page
- **fontFamilySecondary** - utilized by heading elements (`<h1>`, `<h2>`, etc)

By default both fontFamilyPrimary and fontFamilySecondary use `'Open Sans, sans-serif'` font family names.

## Colors

There are 5 text colors available within the Design System:

- **textBasicColor** - main text color, should be used on top of basic backgrounds, usually cards, sidebars, headers, available as `.text-basic` CSS class
- **textAlternateColor** - alternative color used on top of alternate backgrounds - colored headers, sidebars, available as `.text-alternate` CSS class
- **textControlColor** - should we used as a text color for status backgrounds (`success`, `primary`, etc) - usually buttons, selects , available as `.text-control` CSS class
- **textDisabledColor** - indicates text disabled state, available as `.text-disabled` CSS class
- **textHintColor** - used by secondary texts - captions, placeholders, labels, available as `.text-hint` CSS class

## Text Styles

OAH UI typography consist of 14 text styles, where text styles is a combination of `font-size`, `font-weight`, `line-height` and `font-family` properties:

- **6 heading** styles, used by `<h1>`-`<h6>` elements, also available as CSS classes `.h1`, `.h2` ... `.h6`
- **2 subtitle** styles, used as a text for most of the controls (inputs, menus, etc) with classes `.subtitle`, `.subtitle-2`
- **2 paragraph** styles for regular text and `<p>` element, with classes `.paragraph`, `.paragraph-2`
- **2 caption** styles for smaller text like tooltips and input captions, with classes `.caption`, `.caption-2`
- **label** style, used by `<label>` element as available as `.label` CSS class
- **button** text style, used by button element

## Apply text styles classes and properties

All of the text styles could be applied by simply adding CSS classes to an element:

```jsx
<input type="email" name="email" />
<span className="caption-2 text-hint">Work email address</span>
```

Here we added both `caption-2` and `text-hint` making the span to be a caption with a hint text color.

Colors and fonts are also available as theme properties using `theme` props in styled components:

```js
import styled, { css } from 'styled-components';

export const newComponent = styled.div`
  ${({ theme }) => css`
    .my-text {
      font-family: ${theme.fontFamilyPrimary};
      color: ${theme.textBasicColor};
    }
  `}
`;
```

## Customize Typography styles
All text styles and colors are available as [OAH UI Theme](/themes/theme-system) properties. This means that all styles could be easily customized by changing theme variables:

```js
const theme = {
  textCaptionFontFamily: 'fontFamilyPrimary',
  textCaptionFontSize: '0.75rem',
  textCaptionFontWeight: 400,
  textCaptionLineHeight: '1rem',
}
```

Complete list of typography variables could be find at[ Default Theme Variables](/themes/default) page.
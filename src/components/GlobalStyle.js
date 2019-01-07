import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  @font-face {
    font-family: 'Open Sans';
    src: url('/static/Open_Sans/OpenSans-Regular.ttf') format('trueType');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/static/Open_Sans/OpenSans-Bold.ttf') format('trueType');
    font-weight: bold;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    direction: ${theme.dir && theme.dir};
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
    -webkit-font-smoothing: antialiased;
  }
  *::-webkit-scrollbar {
    width: ${theme.scrollbarWidth};
    height: ${theme.scrollbarWidth};
  }

  *::-webkit-scrollbar-thumb {
    background: ${theme.scrollbarFg};
    cursor: pointer;
    border-radius: ${theme.scrollbarThumbRadius};
  }

  *::-webkit-scrollbar-track {
    background: ${theme.scrollbarBg};
  }
`}
`;
export default GlobalStyle;

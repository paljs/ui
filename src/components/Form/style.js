import styled from 'styled-components';
import theme from 'styled-theming';
import { dark, light } from '../color';

const background = theme('mode', {
  light: light.first,
  dark: dark.main
});

const border = theme('mode', {
  light: light.main,
  dark: dark.main
});
const FormStyled = styled.form`
  background: ${background};
  box-shadow: ${dark.bs};
  border: 1px solid ${border};
  border-radius: 10px;
  padding: 50px 20px;
  margin: 100px auto;
  max-width: 500px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;
  h3 {
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    padding: 0;
  }
`;
export default FormStyled;

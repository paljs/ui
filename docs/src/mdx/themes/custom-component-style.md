## Custom components style

You have two ways to edit OAH UI components

#### First

Edit theme keys
every component have variables you can get it from component page theme tab and just pass it like we talk here [Enable Theme System](/guides/enable-theme-system)

#### Second

Use [styled-components](https://www.styled-components.com/docs) package to do this simply too see example:

```js
import styled from 'styled-components';
import { Sidebar } from 'oah-ui'; // import original component

// then pass here
const SidebarStyled = styled(Sidebar)`
  background: transparent;
  & header {
    padding-bottom: 0.5rem;
    text-align: center;
    display: flex;
    height: auto;
    button {
      font-size: 1.5rem;
      padding: 0.25rem 0.5rem;
    }
  }
`;

//export styled one and use it
export default SidebarStyled;
```

#### Use Theme Variable

In case when you need to access theme variables from your application component

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

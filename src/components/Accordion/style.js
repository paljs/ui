import styled, { css } from 'styled-components';

const AccordionStyle = styled.div`
  ${({ theme }) => css`
    display: block;
    box-shadow: ${theme.accordionItemShadow};
    border-radius: ${theme.accordionBorderRadius};
  `}
`;

const ItemStyle = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.accordionItemFontFamily};
    font-weight: ${theme.accordionItemFontWeight};
    background: ${theme.accordionItemBg};
    color: ${theme.accordionItemFgText};

    display: flex;
    flex-direction: column;

    & > header {
      position: relative;
      padding: ${theme.accordionPadding};
      border-bottom-width: ${theme.accordionHeaderBorderWidth};
      border-bottom-style: ${theme.accordionHeaderBorderType};
      border-bottom-color: ${theme.accordionHeaderBorderColor};
      color: ${theme.accordionHeaderFgHeading};

      font-family: ${theme.accordionHeaderFontFamily};
      font-size: ${theme.accordionHeaderFontSize};
      font-weight: ${theme.accordionHeaderFontWeight};

      display: flex;
      align-items: center;
      cursor: pointer;

      &:focus {
        outline: 0;
      }

      i {
        position: absolute;
        ${theme.dir === 'rtl' ? 'left: 1rem;' : 'right: 1rem;'}
      }
    }

    &.disabled > header {
      color: ${theme.accordionHeaderDisabledFg};
      cursor: default;
    }

    &:first-child {
      border-top-left-radius: ${theme.accordionBorderRadius};
      border-top-right-radius: ${theme.accordionBorderRadius};
    }
    &:last-child {
      border-bottom-left-radius: ${theme.accordionBorderRadius};
      border-bottom-right-radius: ${theme.accordionBorderRadius};

      &.collapsed > header {
        border-bottom: none;
      }
    }
    &:not(.collapsed) + & > header {
      border-top-width: ${theme.accordionHeaderBorderWidth};
      border-top-style: ${theme.accordionHeaderBorderType};
      border-top-color: ${theme.accordionHeaderBorderColor};
    }
    .item-body {
      flex: 1;
      -ms-flex: 1 1 auto;
      overflow: auto;
      padding: ${theme.cardPadding};
      position: relative;
    }
    .collapsed {
      overflow: hidden;
      max-height: 0;
      transition: all 0.5s cubic-bezier(0, 1, 0.3, 1) -100ms;
    }
    .expanded {
      max-height: 1500px;
      transition: all 0.5s cubic-bezier(1, 0.15, 1, 1);
    }
  `}
`;

export { ItemStyle, AccordionStyle };

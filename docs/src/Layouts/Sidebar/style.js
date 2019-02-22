import styled from 'styled-components';
import { breakpointDown } from 'oah-ui/theme';
import { Sidebar } from 'oah-ui';

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

  .sidebar-menu {
    & > .menu-items > .menu-item {
      margin-bottom: 0.5rem;
      font-weight: bold;
      a:hover {
        font-weight: bold;
      }
      li {
        font-size: 0.875rem;
        font-weight: normal;
      }
      li.menu-group {
        font-weight: bold;
        padding-top: 1.25rem;
        padding-bottom: 1rem;
      }
    }

    .menu-items .menu-item .menu-item a {
      &:hover,
      &.active,
      &:focus {
        text-shadow: 0.5px 0 0 currentColor;
        font-weight: normal;
        outline: none !important;
      }
    }
  }

  &.compacted {
    header {
      padding-left: 0;
      padding-right: 0;
    }
  }

  ${({ theme }) => breakpointDown('md')`
    margin-top: 0;
    .main-container {
      height: calc(${theme.sidebarHeight} - ${theme.headerHeight}) !important;
      border-top-${theme.dir === 'rtl' ? 'left' : 'right'}-radius: 0;
      .scrollable {
        padding-top: 0;
      }
    }
  `}
`;
export default SidebarStyled;

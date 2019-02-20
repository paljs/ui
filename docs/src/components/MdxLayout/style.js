import { Card } from 'oah-ui';
import styled, { css } from 'styled-components';

const MdxLayoutStyle = styled(Card)`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    .card-body {
      padding: 2rem;
      & > *:last-child {
        margin-bottom: 0;
        & *:last-child {
          margin-bottom: 0;
        }
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.25;
      margin-bottom: 1.25rem;
      font-weight: bold;
    }

    img {
      max-width: 100%;
    }

    table {
      font-size: 0.9375rem;
      width: 100%;
      margin-bottom: 3rem;
      thead {
        color: #8994a3;
        border-bottom: 1px solid #f1f2f3;

        td {
          padding: 1rem 0.5rem;
        }
      }

      tr {
        border-bottom: 1px solid #f1f2f3;

        &:last-child {
          border: none;
        }
        p {
          margin-bottom: 0;
        }
      }

      td {
        padding: 1rem 0.5rem;

        &:first-child {
          font-weight: 500;
        }
      }

      &.striped {
        tbody tr:nth-child(odd) {
          background: #f5f6f7;
        }

        td {
          padding: 1rem 0.5rem;
        }
      }
    }

    ul {
      margin-bottom: 1.5rem;
      ul {
        padding-left: 2.5rem;
        list-style-type: none;
        & > li {
          text-indent: -5px;
          position: relative;
          margin-bottom: 0;

          &::before {
            content: '-';
            position: absolute;
            left: -1.25rem;
          }
        }
      }
      li {
        font-size: 0.9375rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
      }
    }

    .note {
      padding: 1.25rem 3rem 1.5rem 1.25rem;
      border-radius: 0.25rem;
      margin-bottom: 3rem;

      .note-title {
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      .note-body {
        font-size: 0.875rem;
        line-height: 1.5;
      }

      &.note-info {
        color: ${theme.colorInfo};
        background-color: #f0f6ff;
      }

      &.note-warning {
        color: ${theme.colorWarning};
        background-color: #fffae4;
      }
    }

    .color-swatch {
      display: inline-block;
      border: 1px solid black;
      width: 0.875rem;
      height: 0.875rem;
      margin-left: 7px;
      margin-bottom: -2px;
      border-radius: 2px;
    }
    p {
      font-size: ${theme.fontSize};
      line-height: 1.5;
    }
    a {
      color: ${theme.tableLink};
      font-weight: ${theme.fontWeightBold};
      text-decoration: none;
      &:hover {
        color: ${theme.tableLink};
        text-decoration: underline;
      }
    }
  `}
`;
export default MdxLayoutStyle;

import styled from 'styled-components';

const Table = styled.table`
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
    a {
      color: #4479e7;
      font-weight: ${({ theme }) => theme.fontWeightBold};
      text-decoration: none;
      &:hover {
        color: #4479e7;
        text-decoration: underline;
      }
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
  .color-swatch {
    display: inline-block;
    border: 1px solid black;
    width: 0.875rem;
    height: 0.875rem;
    margin-left: 7px;
    margin-bottom: -2px;
    border-radius: 2px;
  }
`;
export default Table;

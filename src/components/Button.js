import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: auto;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  outline: none;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default function Button(props) {
  return (
    <ButtonStyled
      type={props.type || 'button'}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonStyled>
  );
}

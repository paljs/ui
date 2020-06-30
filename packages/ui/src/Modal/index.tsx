import React from 'react';
import Overlay from '../Overlay';
import styled from 'styled-components';

interface ModelProps {
  on?: boolean;
  toggle?: () => void;
}

export const Modal: React.FC<ModelProps> = (props) => {
  if (!props.on) return <></>;
  return (
    <Overlay>
      <StyledModal>
        <Background onClick={props.toggle} />
        <Content>{props.children}</Content>
      </StyledModal>
    </Overlay>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.6;
  background-color: black;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100%;
  max-height: 100%;
`;

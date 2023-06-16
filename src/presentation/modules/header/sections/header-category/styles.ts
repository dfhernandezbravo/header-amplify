import styled, { keyframes } from 'styled-components';

export const ModalCategory = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const animationModal = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  overflow: auto;
  animation-name: ${animationModal};
  animation-duration: 0.5s;
`;

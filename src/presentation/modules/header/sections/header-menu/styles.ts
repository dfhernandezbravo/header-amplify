import styled, { keyframes } from 'styled-components';

export const MenuContainer = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  gap: 12px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const animationIconClose = keyframes`
  0% {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
`;

export const IconCloseContainer = styled.div`
  animation-name: ${animationIconClose};
  animation-duration: 0.4s;
`;

export const IconMenuContainer = styled.div`
  animation-name: ${animationIconClose};
  animation-duration: 0.6s;
`;

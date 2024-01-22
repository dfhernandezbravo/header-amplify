import styled, { keyframes } from 'styled-components';

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0px;
  width: 400px;
  & .info-text {
    color: #485760;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const animationError = keyframes`
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

export const ErrorLoginMessage = styled.div`
  color: white;
  background-color: #ff3e3e;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  animation-name: ${animationError};
  animation-duration: 0.5s;
`;

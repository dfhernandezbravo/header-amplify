import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const SocialLoginContainer = styled.div`
  border-left: 2px solid #b4c2cb;
  padding-left: 12px;
  margin-left: 12px;

  @media (max-width: 720px) {
    padding-left: 0;
    margin-left: 0;
    border-top: 2px solid #b4c2cb;
    border-left: none;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    position: relative;

    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: 'o';
      position: absolute;
      top: -0.8rem;
      width: 1rem;
      color: #b4c2cb;
      left: 47%;
      background-color: #fff;
    }
  }
`;

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
  width: 400px;

  & .text {
    font-size: 12px;
  }

  & .info-text {
    color: #363f45;
    padding: 1rem 2rem;
    text-align: center;
    font-size: 16px;
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

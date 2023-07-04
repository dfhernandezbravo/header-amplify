import styled, { keyframes } from 'styled-components';

export const LoginContainer = styled.button`
  cursor: pointer;
  font-size: 13px;
  background-color: transparent;
  border: none;
  color: white;
  font-family: Roboto, sans-serif;
  position: relative;
`;

export const LoginContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const LoginUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const animationInMenu = keyframes`
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

const animationOutMenu = keyframes`
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

export const LoginMenu = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border-radius: 4px;
  padding: 2px;
  animation-name: ${({ isVisible }) =>
    isVisible ? animationInMenu : animationOutMenu};
  animation-duration: 0.2s;
`;

export const MenuItem = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  min-width: 150px;
  padding: 12px;
  text-align: left;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const LoginMobileButton = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  font-size: 16px;
`;

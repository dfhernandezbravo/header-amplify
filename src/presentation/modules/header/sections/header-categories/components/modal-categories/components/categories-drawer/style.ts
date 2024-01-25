import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const BlockScroll = createGlobalStyle<{ isOpen: boolean }>`
    ${(props) => (props.isOpen ? `body, html {overflow: hidden};` : '')}
`;

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 999;
  overflow: hidden;
  position: absolute;
  margin-top: 0;
`;

export const Opacity = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #363f45;
  z-index: 999;
  overflow: hidden;
  opacity: 70%;
`;

const animationModal = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 79dvh;
    opacity: 1;
  }
`;
const animationModalMobile = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 100dvh;
    opacity: 1;
  }
`;

export const DrawerContent = styled.div`
  overflow: auto;
  animation-name: ${animationModal};
  animation-duration: 0.5s;
  z-index: 9999;
  height: 100%;

  @media screen and (max-width: 1024px) {
    animation-name: ${animationModalMobile};
    overflow: hidden;
    margin-bottom: 20dvh;
  }
`;

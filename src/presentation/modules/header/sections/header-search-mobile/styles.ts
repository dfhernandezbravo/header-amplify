import styled, { keyframes } from 'styled-components';

export const SearchMobileContainer = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 999;
  position: fixed;
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

export const SearchMobileContent = styled.div`
  background-color: #fff;
  overflow: auto;
  animation-name: ${animationModal};
  animation-duration: 0.5s;
  width: 100%;
  height: 100vh;
  color: black;
  display: flex;
  flex-direction: column;
`;

export const SearchMobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #af1212;
  padding: 12px;
  gap: 12px;
  color: white;
`;

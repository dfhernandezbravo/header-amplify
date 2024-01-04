import styled, { keyframes } from 'styled-components';

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

const HeaderResultsContainer = styled.div<{ width: number | string }>`
  animation-name: ${animationInMenu};
  animation-duration: 0.5s;
  width: ${(props) => props.width};
  border: 1px solid #b4c2cb;
  border-radius: 16px;
  @media (min-width: 1024px) {
    z-index: 999;
    border-radius: 16px;
    position: absolute;
    background-color: white;
    margin-top: 50px;
    max-height: 630px;
    width: ${(props) => props.width};
    color: black;
    display: flex;
    flex-direction: row;
  }
`;

export const HeaderResultSpinnerContainer = styled.div`
  diplay: flex;
  height: 300px;
  width: 100%;
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: max-content;
`;
const TextContent = styled.div`
  color: #363f45;
  width: fit-content;
  min-width: max-content;
  margin-left: 15px;
  & > h4 {
    font-size: 16px;
    font-weight: 600;
  }
`;

export { HeaderResultsContainer, LoadingContainer, TextContent };

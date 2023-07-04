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

const HeaderResultsContainer = styled.div`
  animation-name: ${animationInMenu};
  animation-duration: 0.5s;

  @media (min-width: 1024px) {
    z-index: 999;
    position: absolute;
    background-color: white;
    margin-top: 50px;
    padding: 12px 0px;
    max-height: 630px;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    min-width: 520px;
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

export { HeaderResultsContainer };

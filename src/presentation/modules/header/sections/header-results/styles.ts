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
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    z-index: 999;
    border-radius: 16px;
    position: absolute;
    background-color: white;
    margin-top: 45px;
    max-height: 630px;
    color: black;
    flex-direction: row;
    align-items: center;
    width: ${(props) => props.width};
    border: 1px solid #b4c2cb;
    border-radius: 16px;
  }
`;

const SearchContainerResults = styled.div`
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    width: 100%;
  }
`;

const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export { HeaderResultsContainer, SearchContainerResults, NoContentContainer };

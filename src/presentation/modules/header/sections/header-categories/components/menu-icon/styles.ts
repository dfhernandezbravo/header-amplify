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
  gap: 2rem;
  position: relative;
  display: flex;
  margin-left: 0.3rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 3px;
    }
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

export const OpenedCategoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -12px;
  left: -8px;
  width: 300px;
  background-color: #670000;
  z-index: 9999;
  padding: 0.7rem 0.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  div {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) {
    border-radius: 24px;
    background-color: #af1212;
    top: -10px;
    width: fit-content;
    padding: 0.3rem 0.5rem;
    padding-right: 0.7rem;

    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

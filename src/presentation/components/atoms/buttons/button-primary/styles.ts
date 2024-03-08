import styled, { keyframes, css } from 'styled-components';

type ButtonProps = {
  isLoading: boolean;
};

const spin = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`;

export const Button = styled.button`
  font-family: 'Open Sans';
  background-color: #ae1311;
  color: white;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #e1e6ea;
    color: #6e8391;
    font-weight: 600;
    cursor: inherit;
  }
`;

export const ButtonContainer = styled.div<ButtonProps>`
  width: 100%;
  font-family: 'Open Sans';
  & .custom-btn {
    position: relative;
    min-height: 42px;
    ${({ isLoading }) =>
      isLoading &&
      css`
        &::before {
          content: '';
          position: absolute;
          top: 15%;
          left: 46%;
          display: block;
          border: 4px solid rgb(175, 19, 17);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border-left-color: #ffffff;
          animation: ${spin} 1s linear infinite;
        }
      `}
  }
`;

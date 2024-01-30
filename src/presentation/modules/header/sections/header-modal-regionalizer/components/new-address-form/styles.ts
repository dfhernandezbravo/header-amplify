import styled, { css, keyframes } from 'styled-components';

type ButtonProps = {
  isLoading: boolean;
};
const spin = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`;

export const NewAddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  max-width: 385px;
  color: black;
  & .description {
    font-size: ${({ theme: { fontSize } }) => fontSize[200]};
    color: #485760;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[100]};

  & label {
    font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  }
`;

export const FormComtainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[200]};
`;

export const ButtonContainer = styled.div<ButtonProps>`
  & .add-location-button {
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

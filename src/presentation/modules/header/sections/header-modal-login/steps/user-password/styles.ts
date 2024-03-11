import styled from 'styled-components';

export const ResetPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonResetPassword = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  color: #485760;
  font-size: 12px;
  font-weight: 600;
  height: 32px;
  font-family: inherit;
`;

export const TexFieldContainer = styled.div`
  display: flex;
  position: relative;
  & .show-hide-text {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    text-decoration: underline;
    color: #485760;
    font-size: 14px;
    font-weight: 600;
  }
`;

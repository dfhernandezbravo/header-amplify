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
  color: rgb(77, 77, 77);
  font-size: 12px;
`;

export const NewAccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonNewAccount = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const LinkNewAccount = styled.span`
  color: #990606;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 700;
`;

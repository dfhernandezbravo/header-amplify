import styled from 'styled-components';

export const MethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const LoginEmailContainer = styled.div`
  margin-bottom: 1rem;
`;

export const NewAccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
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
  color: #485760;
  font-size: 16px;
  text-decoration: underline;
  font-weight: 700;
`;

export const LinkNewAccountText = styled.span`
  color: #363f45;
  font-size: 16px;
`;

export const SocialLoginContainer = styled.div`
  padding-top: 12px;
  border-left: 2px solid #b4c2cb;
  padding-left: 12px;
`;

import styled from 'styled-components';

export const LoginContainer = styled.button`
  cursor: pointer;
  font-size: 13px;
  background-color: transparent;
  border: none;
  color: white;
  position: relative;
`;

export const LoginContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: 13px;
  background-color: transparent;
  border: none;
  color: white;
  position: relative;
`;

export const LoginInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #670000;
    padding: 0.5rem 1rem;
    border-radius: 28px;
  }
`;

export const LoginMobileButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  height: 48px;
  align-items: center;
  gap: 1rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #485760;
  cursor: pointer;
`;

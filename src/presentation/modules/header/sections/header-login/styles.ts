import Link from 'next/link';
import styled from 'styled-components';

export const LoginContainer = styled.button`
  cursor: pointer;
  font-size: 13px;
  background-color: transparent;
  border: none;
  color: white;
  font-family: Roboto, sans-serif;
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
  font-family: Roboto, sans-serif;
  position: relative;
`;

export const LoginInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #670000;
    padding: 1rem;
    border-radius: 28px;
  }
`;

export const LoginMobileButton = styled(Link)`
  border: none;
  background-color: transparent;
  color: inherit;
  font-size: 16px;
  text-decoration: none;
`;

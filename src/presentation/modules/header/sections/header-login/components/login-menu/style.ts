import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

type MenuItemProps = {
  last?: boolean;
};

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

const animationOutMenu = keyframes`
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

export const LoginMenuContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  border-radius: 8px;
  border: 1px solid #b4c2cb;
  animation-name: ${({ isVisible }) =>
    isVisible ? animationInMenu : animationOutMenu};
  animation-duration: 0.2s;
`;

export const MenuItem = styled(Link)<MenuItemProps>`
  display: block;
  color: #485760;
  text-decoration: none;
  cursor: pointer;
  min-width: 158px;
  font-size: 14px;
  padding: 12px;
  text-align: left;
  border-radius: 4px;

  &:hover {
    background-color: #e1e6ea;
    font-weight: 600;
  }
`;

export const LogoutItem = styled.a`
  display: block;
  color: #485760;
  text-decoration: none;
  cursor: pointer;
  min-width: 158px;
  font-size: 14px;
  padding: 12px;
  text-align: left;
  border-radius: 4px;

  &:hover {
    background-color: #e1e6ea;
    font-weight: 600;
  }
`;

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
  border-radius: 4px;
  padding: 2px;
  animation-name: ${({ isVisible }) =>
    isVisible ? animationInMenu : animationOutMenu};
  animation-duration: 0.2s;
`;

export const MenuItem = styled(Link)<MenuItemProps>`
  display: block;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  min-width: 150px;
  font-size: 15px;
  padding: 12px;
  text-align: left;
  border-bottom: ${(props) => (!props.last ? '1px solid #f2f2f2' : 'none')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

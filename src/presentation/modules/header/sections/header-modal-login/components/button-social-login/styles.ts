import styled from 'styled-components';
import { ColorSocialLogin } from '.';
import Link from 'next/link';

const backgroundColor: Record<ColorSocialLogin, string> = {
  default: '#F1F1F1',
  blue: '#4267B2',
};

const fontColor: Record<ColorSocialLogin, string> = {
  default: '#525252',
  blue: '#FFFFFF',
};

export const ButtonSocialLoginContainer = styled(Link)<{
  color: ColorSocialLogin;
}>`
  text-decoration: none;
  width: 100%;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => backgroundColor[props.color]};
  color: ${(props) => fontColor[props.color]};
  font-size: 16px;
  border: none;
  border-radius: 8px;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

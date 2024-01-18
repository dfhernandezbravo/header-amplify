import styled from 'styled-components';
import { ColorButtonLinkLogin } from '.';
import Link from 'next/link';

const backgroundColor: Record<ColorButtonLinkLogin, string> = {
  default: '#FFFFFF',
  green: '#5EBC5F',
};

const fontColor: Record<ColorButtonLinkLogin, string> = {
  default: '#525252',
  green: '#FFFFFF',
};

export const ButtonLinkContainer = styled(Link)<{
  color: ColorButtonLinkLogin;
}>`
  width: 100%;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => backgroundColor[props.color]};
  color: ${(props) => fontColor[props.color]};
  font-size: 16px;
  border: none;
  border-radius: 8px;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  border: 1px solid #485760;
  &:hover {
    opacity: 0.7;
  }

  & .bold-text {
    font-weight: 600;
  }
`;

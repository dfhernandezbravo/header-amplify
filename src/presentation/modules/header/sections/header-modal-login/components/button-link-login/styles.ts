import styled from 'styled-components';
import { ColorButtonLinkLogin } from '.';

const backgroundColor: Record<ColorButtonLinkLogin, string> = {
  default: '#F1F1F1',
  green: '#5EBC5F',
};

const fontColor: Record<ColorButtonLinkLogin, string> = {
  default: '#525252',
  green: '#FFFFFF',
};

export const ButtonLinkContainer = styled.button<{
  color: ColorButtonLinkLogin;
}>`
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

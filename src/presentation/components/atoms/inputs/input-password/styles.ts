import styled from 'styled-components';

export const InputPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputPasswordLabel = styled.span`
  font-size: 14px;
  text-align: left;
  font-weight: 600;
  padding: 8px 0px;
`;

export const InputPasswordElement = styled.input<{ error: boolean }>`
  padding: 1px 16px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${(props) => (props.error ? '#ec0000' : '#aaa')};
  font-size: 13px;
  letter-spacing: 0;
  color: #4d4d4d;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ec0000;
  font-weight: 600;
  text-align: right;
`;

export const ButtonInputPassword = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

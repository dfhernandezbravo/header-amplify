import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.span`
  font-size: 14px;
  text-align: left;
  font-weight: 600;
  padding-bottom: 4px;
`;

export const InputWrapper = styled.div<{ error?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${(props) => (props.error ? '#ec0000' : '#aaa')};

  padding: 1px 4px;
  height: 45px;
`;

export const InputElement = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0px 12px;
  font-size: 13px;
  letter-spacing: 0;
  color: #4d4d4d;
  height: 100%;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const InputAddon = styled.div`
  display: flex;
  border: none;
  padding: 0px 8px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ec0000;
  font-weight: 600;
`;

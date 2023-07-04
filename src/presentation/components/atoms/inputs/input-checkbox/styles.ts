import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const CheckboxInput = styled.input<{ hasError: boolean }>`
  // appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 3px;
  cursor: pointer;

  ${(props) =>
    props.hasError &&
    css`
      border-color: red;
    `}
`;

export const CheckboxLabel = styled.label`
  font-size: 12px;
`;

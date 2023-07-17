import styled from 'styled-components';

export const RadioLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 12px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;
  flex: 1;
`;

export const RadioWrapper = styled.span<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 3px solid ${({ checked }) => (checked ? '#cc1515' : 'gray')};
  border-radius: 50%;
  padding: 2px;
`;

export const RadioCheck = styled.span<{ checked: boolean }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #cc1515;
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
`;

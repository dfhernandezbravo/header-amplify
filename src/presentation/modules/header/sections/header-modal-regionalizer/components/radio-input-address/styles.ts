import styled from 'styled-components';

interface RadioLabelProps {
  isChecked: boolean;
}

export const RadioLabel = styled.label<RadioLabelProps>`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  font-size: 12px;
  cursor: pointer;
  border: 2px solid ${({ isChecked }) => (isChecked ? '#363F45' : '#eee')};

  & .text {
    font-size: 14px;
    color: #363f45;
    margin-bottom: 5px;
  }
  & .state-text {
    font-size: 14px;
    color: #6e8391;
  }
`;

export const RadioInput = styled.input`
  display: none;
  flex: 1;
`;

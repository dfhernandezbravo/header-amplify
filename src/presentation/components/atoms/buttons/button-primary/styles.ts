import styled from 'styled-components';

export const Button = styled.button`
  background-color: #cc1515;
  color: white;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

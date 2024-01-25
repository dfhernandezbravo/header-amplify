import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ae1311;
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
    background-color: #e1e6ea;
    color: #6e8391;
    font-weight: 600;
    cursor: inherit;
  }
`;

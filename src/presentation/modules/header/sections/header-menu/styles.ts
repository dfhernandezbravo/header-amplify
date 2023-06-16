import styled from 'styled-components';

export const MenuContainer = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  gap: 12px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

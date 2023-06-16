import styled from 'styled-components';

export const CategoryItemContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #1a1a1a;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0px;
  }

  &:hover {
    background-color: #e0e3e8;
  }
`;

export const CategoryTitle = styled.span`
  text-align: left;
  flex: 1;
  padding: 0px 8px;
`;

import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  border-left: 1px solid #ffffff;
  padding: 4px;
  & .shoppingcart-icon {
    padding: 4px;
    &:hover {
      background-color: #670000;
      display: flex;
      border-radius: 28px;
    }
  }
`;

export const BadgeQuantity = styled.div`
  background-color: #dfffff;
  border: 1px solid #cc1414;
  border-radius: 10px;
  color: #ae1311;
  font-weight: 700;
  padding: 0;
  position: relative;
  left: 40px;
  top: -13px;
  min-width: 20px;
  text-align: center;
  font-size: 12px;
`;

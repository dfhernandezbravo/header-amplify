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
  background-color: #fdf737;
  border: 1px solid #cc1414;
  border-radius: 10px;
  color: #333;
  font-weight: 700;
  padding: 0;
  position: relative;
  left: 32px;
  top: -10px;
  min-width: 24px;
  text-align: center;
  font-size: 12px;
`;

import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  border-left: 1px solid #ffffff;
  padding: 4px;
  & .shoppingcart-icon {
    height: 40px;
    width: 40px;
    padding: 4px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #670000;
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 1024px) {
    border-left: none;
  }
`;

export const BadgeQuantity = styled.div`
  background-color: #dfffff;
  border: 1px solid #cc1414;
  border-radius: 24px;
  color: #ae1311;
  font-weight: 700;
  padding: 0;
  position: relative;
  left: 52px;
  top: -10px;
  min-width: 16px;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
`;

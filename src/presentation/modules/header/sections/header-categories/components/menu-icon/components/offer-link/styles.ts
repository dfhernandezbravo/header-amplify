import styled from 'styled-components';

export const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .text {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    line-height: 40px;
  }
  &:hover {
    background-color: #670000;
    border-radius: 24px;
  }
`;

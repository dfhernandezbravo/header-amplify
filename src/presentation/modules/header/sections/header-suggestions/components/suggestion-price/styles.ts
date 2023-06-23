import styled from 'styled-components';

export const SuggestionPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const SuggestionAmount = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const SuggestionDiscount = styled.div`
  background-color: #cc1414;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  font-weight: 700;
  padding: 4px;
`;

export const SuggestionListPrice = styled.span`
  font-size: 12px;
  color: #4d4d4d;
  text-decoration: line-through;
`;

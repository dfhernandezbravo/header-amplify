import styled from 'styled-components';

export const SuggestionPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const SuggestionAmount = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #363f45;
`;

export const SuggestionDiscount = styled.div`
  background-color: #af1212;
  border-radius: 3px;
  width: fill-content;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: white;
  font-weight: 700;
  padding: 1px 4px 1px 4px;
`;

export const SuggestionListPrice = styled.span`
  font-size: 12px;
  color: #4d4d4d;
  text-decoration: line-through;
`;

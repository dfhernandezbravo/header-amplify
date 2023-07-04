import Link from 'next/link';
import styled from 'styled-components';

export const SuggestionSpinnerContainer = styled.div`
  diplay: flex;
  height: 300px;
  width: 100%;
`;

export const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-left: 1px solid #acacac;
  padding: 0px 12px;
  max-width: 1000px;
  overflow-y: auto;
`;

export const SuggestionsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SuggestionsItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  max-width: 160px;
  text-decoration: none;
  color: black;
`;

export const SuggestionBrand = styled.span`
  font-size: 15px;
  color: #1a1a1a;
  font-weight: 600;
`;

export const SuggestionName = styled.span`
  color: #4d4d4d;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 40px;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

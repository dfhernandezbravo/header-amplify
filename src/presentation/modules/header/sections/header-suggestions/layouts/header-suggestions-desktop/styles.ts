import Link from 'next/link';
import styled from 'styled-components';

export const SuggestionSpinnerContainer = styled.div`
  diplay: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
`;

export const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-left: 1px solid #b4c2cb;
  padding: 0px 12px;
  max-width: 1000px;
  overflow-y: auto;
  width: 100%;
  & > h4 {
    color: #363f45;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }
`;

export const SuggestionsListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
`;

export const SuggestionsItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  margin: 15px 0;
  min-width: 200px;
  max-width: 220px;
  text-decoration: none;
  color: black;
`;

export const SuggestionBrand = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #363f45;
  font-weight: 600;
`;

export const SuggestionName = styled.span`
  color: #485760;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: max-content;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

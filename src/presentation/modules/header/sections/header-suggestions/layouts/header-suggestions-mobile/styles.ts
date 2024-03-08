import Link from 'next/link';
import styled from 'styled-components';

export const SuggestionsMobileContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SuggestionsMobileItem = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  text-decoration: none;
`;

export const SuggestionsMobileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const SuggestionSpinnerContainer = styled.div`
  diplay: flex;
  justify-content: center;
  align-items: start;
  height: 50px;
  width: 100%;
`;

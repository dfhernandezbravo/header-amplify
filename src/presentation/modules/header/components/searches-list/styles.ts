import Link from 'next/link';
import styled from 'styled-components';

const SearchListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  max-width: 150px;
`;

const SearchItem = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  width: 100%;
  color: #4d4d4d;
  align-items: center;
  text-transform: capitalize;
  padding: 8px;
  display: block;

  &:hover {
    background-color: #eee;
  }
`;

const SearchItemCategory = styled(SearchItem)`
  font-weight: 700;
`;

const SearchCategoriesTitle = styled.div`
  color: #aaa;
  font-weight: 700;
  font-size: 12px;
  padding: 8px;
`;

export {
  SearchListContainer,
  SearchItem,
  SearchCategoriesTitle,
  SearchItemCategory,
};

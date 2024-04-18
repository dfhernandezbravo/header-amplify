import Link from 'next/link';
import styled from 'styled-components';

const SearchListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 220px;
  padding-top: 24px;
  margin: 0 6px;
`;

const SearchItem = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  width: 100%;
  color: #4d4d4d;
  align-items: center;
  text-transform: capitalize;
  padding: 10px;
  &:hover {
    background-color: #eee;
    border-radius: 12px 0px 0px 12px;
  }
`;

const SearchItemCategory = styled(SearchItem)`
  font-weight: 700;
`;

const SearchCategoriesTitle = styled.div`
  color: #6e8391;
  font-weight: 700;
  font-size: 12px;
  padding: 10px;
`;

const SearchViewAll = styled(Link)`
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #eee;
    border-radius: 12px 0px 0px 12px;
  }
`;

export {
  SearchListContainer,
  SearchItem,
  SearchCategoriesTitle,
  SearchItemCategory,
  SearchViewAll,
};

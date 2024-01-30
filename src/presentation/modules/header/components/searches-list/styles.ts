import Link from 'next/link';
import styled from 'styled-components';

const SearchListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 219px;
  padding-top: 24px;
`;

const SearchItem = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  width: 100%;
  color: #4d4d4d;
  align-items: center;
  text-transform: capitalize;
  padding: 0px 10px 20px 20px;
  display: block;
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
  padding: 0px 10px 20px 20px;
`;

export {
  SearchListContainer,
  SearchItem,
  SearchCategoriesTitle,
  SearchItemCategory,
};

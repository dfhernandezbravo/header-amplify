import Link from 'next/link';
import styled from 'styled-components';

const SearchListContainer = styled.div`
  color: black;
  display: flex;
  width: 100%;
  & > h4 {
    color: #363f45;
    font-size: 16px;
  }
`;

const PopularSearchItem = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  width: 100%;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 8px 0px;

  &:hover {
    background-color: #eee;
  }
`;
const RecentSearchItem = styled.div`
  font-size: 13px;
  text-decoration: none;
  width: 100%;
  color: #4d4d4d;
  display: flex;
  border: 1ps solid red;
  text-transform: capitalize;
  padding: 8px 0px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const IconRightContainer = styled.div`
  margin-inline-start: auto;
  margin-right: 20px;
`;
const IconLeftContainer = styled.div`
  margin-right: 10px;
`;
const ItemRecentResult = styled.div`
  width: 100%;
`;
const ContainerPopulars = styled.div`
  padding: 20px 0px 20px 20px;
  width: 100%;
  & > h4 {
    color: #363f45;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
const ContainerRecents = styled.div`
  padding-right: 25px;
  border-right: 1px solid #b4c2cb;
  width: 100%;
  padding: 20px 0px 20px 20px;
  & > h4 {
    margin-bottom: 10px;
    color: #363f45;
    font-size: 16px;
    font-weight: 600;
  }
`;

export {
  SearchListContainer,
  PopularSearchItem,
  IconRightContainer,
  IconLeftContainer,
  RecentSearchItem,
  ItemRecentResult,
  ContainerPopulars,
  ContainerRecents,
};

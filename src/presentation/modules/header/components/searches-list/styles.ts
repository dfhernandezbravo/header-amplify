import Link from 'next/link';
import styled from 'styled-components';

const SearchListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

const SearchItem = styled(Link)`
  height: 35px;
  font-size: 13px;
  text-decoration: none;
  width: 100%;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export { SearchListContainer, SearchItem };

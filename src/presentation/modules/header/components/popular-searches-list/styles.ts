import Link from 'next/link';
import styled from 'styled-components';

const PopularSearchListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
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

export { PopularSearchListContainer, PopularSearchItem };

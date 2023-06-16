import Link from 'next/link';
import styled from 'styled-components';

export const CategoryDetailItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CategoryDetailItemTitle = styled(Link)`
  text-decoration: none;
  color: #4d4d4d;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryDetailItemLink = styled(Link)`
  text-decoration: none;
  color: #4d4d4d;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryDetailItemLinkAll = styled(Link)`
  text-decoration: underline;
  color: #1a1a1a;
  font-size: 13px;
  font-weight: 600;
`;

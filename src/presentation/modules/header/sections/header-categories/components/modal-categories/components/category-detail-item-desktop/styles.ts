import Link from 'next/link';
import styled from 'styled-components';

export const CategoryDetailTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 24px;
`;

export const CategoryDetailItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CategoryDetailItemTitle = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration: none;
  color: #af1212;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryDetailItemLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #485760;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryDetailItemLinkAll = styled(Link)`
  text-decoration: underline;
  color: #1479b8;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

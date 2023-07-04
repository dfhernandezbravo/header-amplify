import Link from 'next/link';
import styled from 'styled-components';

export const CategoriesDetailTitleMobileLink = styled(Link)`
  text-decoration: underline;
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 600;
`;

export const ChildrenAccordionCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  padding: 4px 0px;
  color: #1a1a1a;
`;

export const CategoryLinkAll = styled(Link)`
  text-decoration: none;
  padding: 4px 0px;
  color: #1a1a1a;
  text-decoration: underline;
  font-weight: 600;
  font-size: 13px;
`;

export const CategoryHeader = styled.div`
  padding: 12px;
  border-bottom: 1px solid #acacac;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CategoryHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const CategoryContent = styled.div`
  border-bottom: 1px solid #acacac;
`;

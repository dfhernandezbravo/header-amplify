import Link from 'next/link';
import styled from 'styled-components';

export const CategoryDetailItemContainer = styled.div`
  max-height: 82dvh;
`;

export const CategoriesDetailTitleMobileLink = styled(Link)`
  text-decoration: underline;
  color: #485760;
  font-size: 14px;
  font-weight: 500;
`;

export const ChildrenAccordionCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  padding: 4px 0px;
  color: #485760;
`;

export const CategoryLinkAll = styled(Link)`
  padding: 4px 0px;
  color: #485760;
  font-weight: 600;
  font-size: 13px;
`;

export const CategoryHeader = styled.div`
  padding: 12px 14px;
  border-bottom: 1px solid #acacac;
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const CategoryHeaderTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #485760;
`;

export const CategoryContent = styled.div`
  border-bottom: 1px solid #acacac;
`;

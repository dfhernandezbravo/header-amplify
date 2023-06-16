import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

export const CategoriesDesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`;

export const CategoriesItemsContainer = styled.div`
  width: 300px;
  border-right: 1px solid #acacac;
  height: 100%;
  overflow-y: auto;
`;

export const CategoriesDetailContainer = styled.div`
  padding: 20px;
  width: 65rem;
  height: 100%;
  overflow-y: auto;
`;

export const CategoriesDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoriesDetailTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const CategoriesDetailTitleLink = styled(Link)`
  text-decoration: underline;
  color: #1a1a1a;
  font-size: 13px;
  font-weight: 600;
`;

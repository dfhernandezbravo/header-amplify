import Link from 'next/link';
import styled, { css } from 'styled-components';

export const CategoriesDesktopContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  height: 79vh;
  border-radius: 8px;
  border-top-left-radius: 0;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      border-top-right-radius: 0;
    `}
  overflow: hidden;
  background-color: #fff;
  margin: 0.8rem;
  margin-top: 0;
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
  color: #1479b8;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

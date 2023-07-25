import Link from 'next/link';
import styled from 'styled-components';

export const SiteMapLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
`;

export const SiteMapLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SiteMapLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 12px;
`;

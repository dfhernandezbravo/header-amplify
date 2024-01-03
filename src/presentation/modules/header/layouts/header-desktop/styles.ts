import styled from 'styled-components';

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0.5rem 0.5rem 0 0.5rem;
`;

export const HeaderDesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 40px 8px 30px;
  align-items: center;
  /* justify-content: space-between; */
  color: white;
  gap: 32px;
`;

export const HeaderDesktopSearchSection = styled.div`
  display: flex;
  flex: 1;
  max-width: 1250px;
`;

export const Divider = styled.div`
  height: 50px;
  border-left: 0.5px solid white;
`;

import styled from 'styled-components';

export const HeaderDesktopContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0.5rem 0.5rem 0 0.5rem;
  width: 98%;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin-bottom: 10px;
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

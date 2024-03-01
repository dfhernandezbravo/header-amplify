import styled from 'styled-components';

export const HeaderDesktopContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  align-items: center;
  /* min-height: fit-content; */
  /* margin-left: 1rem; */
  /* margin-right: 1rem; */
  padding: 0.3rem 1rem;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  /* margin: 0.5rem 0.5rem 0 0.5rem; */
  width: 100%;
  /* padding: 0 10px 0 0; */
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* padding: 0 10px 0 0; */
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const HeaderDesktopSearchSection = styled.div`
  display: flex;
  flex: 1;
`;

export const Divider = styled.div`
  height: 50px;
  border-left: 0.5px solid white;
`;

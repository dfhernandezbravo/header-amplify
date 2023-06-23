import styled from 'styled-components';

const HeaderResultsContainer = styled.div`
  z-index: 1;
  position: absolute;
  background-color: white;
  margin-top: 50px;
  padding: 12px 0px;
  max-height: 630px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  min-width: 520px;
  color: black;
  display: flex;
  flex-direction: row;
`;

export const HeaderResultSpinnerContainer = styled.div`
  diplay: flex;
  height: 300px;
  width: 100%;
`;

export { HeaderResultsContainer };

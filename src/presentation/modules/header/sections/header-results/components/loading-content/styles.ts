import styled from 'styled-components';

export const HeaderResultSpinnerContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: max-content;

  @media (max-width: 1023px) {
    height: 90vh;
  }
`;
const TextContent = styled.div`
  color: #363f45;
  width: fit-content;
  min-width: max-content;
  margin-left: 15px;
  & > h4 {
    font-size: 16px;
    font-weight: 600;
  }
`;
export { LoadingContainer, TextContent };

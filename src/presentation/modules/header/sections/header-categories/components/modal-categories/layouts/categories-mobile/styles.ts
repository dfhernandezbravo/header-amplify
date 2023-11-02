import styled from 'styled-components';

export const CategoriesMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  height: 100vh;
  width: 90vw;

  @media only screen and (min-device-width: 768px) {
    width: 50vw;
  }
`;

export const CategoriesMobileList = styled.div`
  padding: 20px;
`;

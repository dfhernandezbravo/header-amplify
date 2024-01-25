import styled from 'styled-components';

export const CategoriesMobileContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: black;
  height: 100vh;
  width: 100dvw;
  margin-top: 109px;

  @media only screen and (min-device-width: 768px) {
    width: 50vw;
  }
`;

export const CategoriesMobileList = styled.div`
  padding: 20px 10px;

  @media screen and (max-width: 1024px) {
    overflow-y: scroll;
    max-height: 62vh;
  }
`;

export const CategoriesMobileTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  color: #485760;
  text-align: left;
  margin-bottom: 1rem;
`;

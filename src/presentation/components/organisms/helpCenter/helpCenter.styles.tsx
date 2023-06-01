import styled from 'styled-components';

export const HelpCenterWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1 px solid #fff;
  padding-bottom: 6rem;

  @media (max-width: 1026px) {
    flex-direction: column;
    padding-bottom: 3rem;
  }
`;

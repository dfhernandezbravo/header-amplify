import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  & .header {
    padding: 3rem 4rem;
    text-align: center;

    @media (max-width: 1024px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

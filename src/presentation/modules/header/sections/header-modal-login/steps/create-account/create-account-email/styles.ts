import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  align-items: center;
  & .title {
    padding: 10px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    height: 236px;
  }
`;

export const ContainerIcon = styled.div``;
export const ContainerText = styled.div`
  color: #363f45;
  max-width: 350px;
  margin-left: 20px;
  & > h4 {
    font-size: 18px;
    font-weight: 600;
  }
  & > p {
    font-size: 15px;
    margin-top: 20px;
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    padding: 0 40px;
    text-align: center;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerIcon = styled.div``;
export const ContainerText = styled.div`
  color: #363f45;
  max-width: 360px;
  margin-left: 20px;
  &>h4: {
    font-size: 18px;
    font-weight: 600;
  }
  & > p {
    font-size: 15px;
    margin-top: 20px;
  }
`;

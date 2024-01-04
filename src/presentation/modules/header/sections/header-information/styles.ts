import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 5px;
  & .stores-link {
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
  }
`;

export const InstallmentContainer = styled.div`
  display: flex;
  padding-right: 5px;
  border-right: 1px solid #ffffff;
  & .text {
    color: #ffffff;
    margin-right: 5px;
    font-size: 14px;
  }
`;

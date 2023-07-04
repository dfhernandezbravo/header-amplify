import styled from 'styled-components';

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0px;
  width: 400px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

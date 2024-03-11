import styled from 'styled-components';

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;

  & .title,
  .back-button {
    color: #485760;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const ModalIconButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

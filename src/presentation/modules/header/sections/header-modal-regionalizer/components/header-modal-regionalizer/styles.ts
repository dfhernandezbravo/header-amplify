import styled from 'styled-components';

export const HeaderModalRegionalizerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .modal-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  & .title {
    font-size: 18px;
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

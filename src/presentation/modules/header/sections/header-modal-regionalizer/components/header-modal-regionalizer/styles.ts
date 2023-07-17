import styled from 'styled-components';

export const HeaderModalRegionalizerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #afafaf;
  padding: 12px 0px;

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

import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  top: 107%;
  z-index: 999;
  width: 150%;
`;

export const PopupWrapper = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 12px;
  width: 330px;
  color: #4d4d4d;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PopupDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  font-family: 'Open Sans';

  & .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: -10px;
  left: 20%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
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

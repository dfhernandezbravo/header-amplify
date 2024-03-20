import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  top: 107%;
  z-index: 999;
  width: 150%;
  @media (max-width: 1024px) {
    width: 100%;
    top: 84px;
    left: -306px;
    transform: translate(100%, -50%);
  }
`;

export const PopupWrapper = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 1rem;
  width: 335px;
  height: 150px;
  color: #4d4d4d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid #b4c2cb;
  @media (max-width: 1024px) {
    position: relative;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 1rem;
    width: 314px;
    height: auto;
    color: #4d4d4d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 1px solid #b4c2cb;
  }
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
    align-items: center;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
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
  @media (max-width: 1024px) {
    top: -8px;
    left: 85%;
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

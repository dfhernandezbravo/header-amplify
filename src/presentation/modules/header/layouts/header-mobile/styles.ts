import styled from 'styled-components';

interface Props {
  isCartPath?: boolean;
}

export const HeaderMobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #af1212;
  color: white;
`;

export const HeaderMobileOptionSection = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 67px;
  padding: 8px 16px;
  border-bottom: ${({ isCartPath }) =>
    isCartPath ? 'none' : '1px solid hsla(0, 0%, 100%, 0.5);'};

  @media (max-width: 640px) {
    padding: 8px;
  }
`;

export const HeaderMobileOptionSectionElement = styled.div<Props>`
  display: ${({ isCartPath }) => (isCartPath ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const HeaderMobileSearchSection = styled.div<Props>`
  display: ${({ isCartPath }) => (isCartPath ? 'none' : 'inherit')};
  width: 100%;
  padding: 12px 16px;
  height: 65px;
  position: relative;
`;

export const HeaderMobileLocationSection = styled.div<Props>`
  width: 100%;
  background-color: ${({ isCartPath }) => (isCartPath ? '#af1311' : '#990707')};
  padding: 8px 16px;
`;

export const SearchInputContainer = styled.input`
  border-radius: 8px;
  height: 40px;
  padding: 1rem;
  border: none;
  width: 100%;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 400;
  background-color: white;
`;

export const IconSearchContainer = styled.div`
  color: #000;
  fill: #000;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 8px;
  background-color: #fff;
  border-left: 1px solid #d2d2d2;
`;

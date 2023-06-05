import styled from 'styled-components';

export const HeaderMobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #af1212;
  color: white;
`;

export const HeaderMobileOptionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 67px;
  padding: 8px 16px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);

  @media (max-width: 640px) {
    padding: 8px;
  }
`;

export const HeaderMobileOptionSectionElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const HeaderMobileSearchSection = styled.div`
  width: 100%;
  padding: 12px 16px;
  height: 65px;
`;

export const HeaderMobileLocationSection = styled.div`
  width: 100%;
  background-color: #990707;
  padding: 8px 16px;
`;

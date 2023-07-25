import styled from 'styled-components';

export const FooterBlackContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: white;
  align-items: center;
  padding: 20px;
`;

export const SectionLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-direction: row;
  }
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  min-height: 300px;
  background-color: rgb(102, 102, 102);
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: rgb(102, 102, 102);
`;

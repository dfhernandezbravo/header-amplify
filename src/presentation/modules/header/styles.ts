import styled from 'styled-components';

export const HeaderContainerWrapper = styled.div<{
  $visible: boolean;
  $positionScroll: number;
  $heightHeader: number;
}>`
  position: ${({ $positionScroll }) =>
    $positionScroll > 0 ? 'fixed' : 'relative'};
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ae1311;
  transition: transform 0.6s ease-in-out;
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(-100%)'};
`;

export const Spacer = styled.div`
  width: 100%;
  height: 158px;

  @media screen and (max-width: 968px) {
    height: 116px;
  }
`;

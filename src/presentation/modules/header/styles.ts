import styled from 'styled-components';

export const HeaderContainerWrapper = styled.div<{ visible: boolean }>`
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f9f9f9;
  transition: transform 0.6s ease-in-out;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(-100%)'};
`;

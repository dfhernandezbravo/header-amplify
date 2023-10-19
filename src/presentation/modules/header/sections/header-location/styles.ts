import styled from 'styled-components';

interface Props {
  isCartPath?: boolean;
}

export const RegionalizerContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-size: 12px;
  cursor: pointer;

  @media only screen and (max-width: 48em) {
    align-items: ${({ isCartPath }) => (isCartPath ? 'center' : 'inherit')};

    & .title {
      display: ${({ isCartPath }) => (isCartPath ? 'none' : 'inherit')};
    }
  }
`;

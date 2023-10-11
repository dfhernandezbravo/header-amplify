import styled from 'styled-components';


interface Props {
  isCartPath: boolean
}

export const HeaderDesktopContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  padding: 8px 40px 8px 30px;
  align-items: center;
  justify-content: ${({isCartPath}) => isCartPath ? 'flex-start' : 'space-between'};
  color: white;
  gap: 32px;
`;

export const HeaderDesktopSearchSection = styled.div<Props>`
  display: ${({isCartPath}) => isCartPath ? 'none' : 'flex'};
  flex: 1;
`;

export const Divider = styled.div`
  height: 50px;
  border-left: 0.5px solid white;
`;

export const Container = styled.div<Props>`
  display:${({isCartPath}) => isCartPath ? 'none' : 'flex'};
  align-items: center;
  gap: 1rem;
`;

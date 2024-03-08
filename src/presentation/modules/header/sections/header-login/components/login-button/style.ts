import styled from 'styled-components';

export const LoginUser = styled.div<{ isTwoParagraph: boolean }>`
  display: flex;
  flex-direction: ${({ isTwoParagraph }) =>
    isTwoParagraph ? 'column' : 'row'};
  align-items: ${({ isTwoParagraph }) =>
    isTwoParagraph ? 'flex-start' : 'center'};
  gap: ${({ isTwoParagraph }) => (isTwoParagraph ? '0' : '0.09375rem')};

  span {
    font-size: 12px;
  }
`;

export const LoginButtonContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  strong {
    min-width: 60px;
  }
`;

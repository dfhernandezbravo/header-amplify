import styled from 'styled-components';

export const HelpCenterWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1 px solid #fff;
  padding-bottom: 6rem;

  &[data-mobile='true'] {
    flex-direction: column;
  }
`;

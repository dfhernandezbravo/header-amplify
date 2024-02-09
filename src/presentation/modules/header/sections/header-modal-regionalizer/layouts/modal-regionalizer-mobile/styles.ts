import styled, { createGlobalStyle } from 'styled-components';

export const BlockScroll = createGlobalStyle<{ isOpen: boolean }>`
    ${(props) => (props.isOpen ? `body, html {overflow: hidden};` : '')}
`;

export const Container = styled.div`
  min-width: calc(100dvw - 3rem);
`;

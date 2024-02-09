import { createGlobalStyle } from 'styled-components';

export const BlockScroll = createGlobalStyle<{ isOpen: boolean }>`
    ${(props) => (props.isOpen ? `body, html {overflow: hidden};` : '')}
`;

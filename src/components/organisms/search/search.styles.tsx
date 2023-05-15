import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
    width: 100%;
    margin: 0 2.35rem;
    background-color: #af1212;
    text-align: center;

    &[data-mobile="true"]{
        padding: 1rem 0;
        border-top: 1px solid hsla(0,0%,100%,.5);
    }
`;

export const SearchInput = styled.input`
    border-radius: 8px;
    height: 40px;
    padding: 1rem;
    border: none;
    width: 95%;
    color: #4d4d4d;
    font-size: 14px;
    font-weight: 400;
`;
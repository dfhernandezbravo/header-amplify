import styled from "styled-components";

export const HelpCenterWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #FFF;
    border: 1 px solid #FFF;
    padding-bottom: 6rem;

    &[data-mobile="true"]{
        flex-direction: column;
    }
`;
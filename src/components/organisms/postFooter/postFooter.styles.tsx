import styled from 'styled-components';

export const PostFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #333;
    width: 95%;
    max-width: 79.25rem;
    padding: 1rem 0;
    margin: 0 auto;
    border-top: 1px solid #666;
    font-size: 0.85rem;
    line-height: 1.5;
    font-weight: 400;

    p{
        /* color: #747474; */ /* -> Color real de web Easy baja metrica Accesibilidad */
        padding-right: 0.4rem;
    }

    ul{
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: center;

        a{
            text-decoration: none;
            color: #FFFFFF;
        }
    }

    @media (max-width: 1024px){
        flex-direction: column;
        align-items: center;
        font-size: 0.75rem;

        p{
            padding-bottom: 0.5rem;
        }
    }
`;
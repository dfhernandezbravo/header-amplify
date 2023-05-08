import styled from "styled-components";

export const InfoFooterContainer = styled.div`
    width: 100%;
    padding-top: 7.5rem;
`

export const InfoListado = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1rem;

    h3{
        margin: 10px 0;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5;
    }

    nav{
        display: flex;
        flex-direction: column;

        li{
            list-style: none;
            margin-bottom: 0.875rem;

            a{
                font-size: 0.875rem;
                font-weight: 400;
                text-decoration: none;
                color: #FFFFFF;
            }
        }
    }
`

export const InfoSocial = styled.div`
    display: flex;
    flex-direction: column;

`

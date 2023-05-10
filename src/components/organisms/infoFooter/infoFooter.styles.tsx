import styled from "styled-components";

export const InfoFooterContainer = styled.div`
    width: 100%;
    padding-top: 7.5rem;

    @media (max-width: 1026px){
        padding-top: 5rem;
    }
`

export const InfoListado = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    margin: 0 auto;

    .line{
        height: 380px;
        width: 1px;
        background-color: #666;
    }

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
                font-weight: 200;
                text-decoration: none;
                color: #FFFFFF;
            }
        }
    }
`

export const InfoSocial = styled.div`
    display: flex;
    flex-direction: column;

    div p{
        margin: 10px 0;
        font-weight: bold;
    }

    .infoSolcial_list{
        display: flex;
        list-style: none;
        
        .li{
            list-style: none;
        }
    }

`

import styled from "styled-components";

export const AccordionContainer = styled.div`
    width: 100%;
    color: #fff;
    padding: 0 1rem;

    &:first-child{
        padding-top: 2rem;
    }

`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .875rem;
    font-weight: 300;
    cursor: pointer;
    border-bottom: 1px solid #666;
    margin-bottom: 1.5rem;
    
    p{
        margin-bottom: 1.5rem;
    }

    span{
        font-weight: 200;
        font-size: 2rem;

        &[data-color="red"]{
            color: red;
        }
    }
`;

// export const IconContainer = styled.div`
//     height: 16px;
//     width: 16px;
//     display: flex;
//     align-items: start;
//     align-content: flex-start;
//     font-size: 20px;
//     color: red;
// `;

export const Content:any = styled.div`
    padding: 0 0 1rem;

    a{
        font-size: .875rem;
        font-weight: 200;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
    }
`;
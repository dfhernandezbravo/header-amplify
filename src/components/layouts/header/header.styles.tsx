import styled, { css } from 'styled-components';

type LinkProp = {
    image?: string;
}

export const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderTop = styled.ul`
    font-family: 'Open Sans', sans-serif;
    height: 30px;
    background-color: #333;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const HeaderLink = styled.a<LinkProp>`
    font-size: .75rem;
    font-weight: 600;
    line-height: 16px;
    list-style: none;
    height: 29px;
    min-width: 100px;
    background-size: auto 13px;
    cursor: pointer;
    color: white;        
    margin-right: 10px;
    vertical-align: middle;
    padding: 7px 15px!important;
    ${props => {
        if (props.image) {
            return css`
                background: url(${props.image}) center 9px no-repeat;
            `
        }
    }}
    &:hover {
        background-color: #000;
    }
`;

export const HeaderContent = styled.div`
    background-color: #cc1414;
    height: 80px;
    width: 100%;
    color: white;
    
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .logo {
        width: max-content;
        height: max-content;
    }
`;

export const HeaderBottom = styled.div`
    height: 32px;
    background-color: #990707;
    padding: 8px 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    font: normal normal 600 16px/20px 'Open Sans';
    vertical-align: center;

    img {
        margin-left: 10px;
    }
    div {
        display: flex;
    }
`;
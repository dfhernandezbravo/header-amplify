import styled, { css } from "styled-components";

type LinkProp = {
  image?: string;
};

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTop = styled.ul`
  font-family: "Open Sans", sans-serif;
  height: 30px;
  background-color: #333;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  &[data-hidden="true"]{
    display: none;
  }
`;

export const HeaderTopItem = styled.li`
  list-style: none;

  &:nth-last-child(-n + 3) > a{
    &:hover{
      text-decoration: underline;
    }
  }
`;

export const HeaderLink = styled.a<LinkProp>`
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 16px;
  list-style: none;
  text-decoration: none;
  height: 29px;
  min-width: 100px;
  background-size: auto 13px;
  cursor: pointer;
  color: white;
  margin: 0 !important;
  margin-right: 10px;
  padding: 7px 15px !important;
  ${(props) => {
    if (props.image) {
      return css`
        background: url(${props.image}) center 9px no-repeat;
      `;
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
  font: normal normal 600 16px/20px "Open Sans";
  vertical-align: center;

  * {
    color: white;
    text-decoration: none;
  }
  img {
    margin-left: 10px;
  }
  div {
    display: flex;
  }
`;

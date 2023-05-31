import styled, { css } from 'styled-components';

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
  font-family: 'Open Sans', sans-serif;
  height: 30px;
  background-color: #333;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 1026px) {
    display: none;
  }
`;

export const HeaderTopItem = styled.li`
  list-style: none;

  &:nth-last-child(-n + 3) > a {
    &:hover {
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

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  background-color: #af1212;
  height: 80px;
  width: 100%;
  color: white;

  @media (max-width: 1026px) {
    height: 60px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 460px;

  .logo {
    width: max-content;
    height: max-content;
    cursor: pointer;
    margin-left: 30px;
  }

  @media (max-width: 1026px) {
    min-width: 0;

    .logo {
      margin-left: 1rem;
    }
  }
`;

export const MenuCategories = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 2rem;
  padding-right: 1rem;
  border-right: 1px solid hsla(0, 0%, 100%, 0.5);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  .menuHamburg {
    width: 25px;
    height: 25px;
    margin-right: 0.85rem;

    & > span {
      display: block;
      width: 100%;
      height: 2px;
      margin: 6px 0 0 0;
      background-color: #fff;
    }

    & :first-child {
      margin-top: 3px;
    }
  }

  @media (max-width: 1026px) {
    flex-direction: column;
    border-right: none;
    padding-right: 0;
    margin: 0 0 0 1rem;

    .menuHamburg {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }
`;

export const MenuLocation = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.7;
      padding-left: 1rem;
    }

    & :nth-child(2) {
      font-size: 14px;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  min-width: 280px;

  @media (max-width: 1026px) {
    min-width: 0;

    svg {
      margin-left: 1rem;
    }
  }
`;

export const UserLogin = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid hsla(0, 0%, 100%, 0.5);
  padding-right: 1rem;

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
    margin-left: 0.5rem;
  }

  & :nth-child(2) {
    font-size: 13px;
  }

  @media (max-width: 1026px) {
    p {
      text-decoration: underline;
    }
  }
`;

export const HeaderCart = styled.div`
  margin-right: 40px;

  @media (max-width: 1026px) {
    margin-right: 20px;
  }
`;

export const HeaderBottom = styled.div`
  height: 32px;
  background-color: #670000;
  padding: 0.5rem 5.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  font: normal normal 600 16px/20px 'Open Sans';
  vertical-align: center;

  a {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

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

  div > span {
    font-size: 14px;
    font-weight: 400;
  }
`;

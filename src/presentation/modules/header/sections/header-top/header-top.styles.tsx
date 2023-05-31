import styled, { css } from 'styled-components';

type LinkProp = {
  image?: string;
};

export const HeaderTop = styled.ul`
  font-family: 'Open Sans', sans-serif;
  height: 30px;
  background-color: #333;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  &[data-hidden='true'] {
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

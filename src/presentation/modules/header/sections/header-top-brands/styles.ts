import styled, { css } from 'styled-components';

type LinkProp = {
  image?: string;
  hasTooltip: boolean;
};

interface Props {
  isCartPath: boolean
}

export const HeaderTop = styled.ul<Props>`
  font-family: 'Open Sans', sans-serif;
  height: 30px;
  background-color: #333;
  width: 100%;
  display: ${({isCartPath}) => isCartPath ? 'none' : 'flex'};
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 1023px) {
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

const hasTooltip = css`
  &:after {
    content: '';
    position: absolute;
    background-image: url('/icons/header-top-brands/chevron-down-small.svg');
    width: 10px;
    height: 10px;
    right: 0;
    top: 12px;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  &:hover div {
    display: block;
  }
`;

export const HeaderLink = styled.div<LinkProp>`
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
  position: relative;
  &:hover {
    background-color: #000;
  }
  ${(props) =>
    props.image
      ? `background: url(${props.image}) center 9px no-repeat;`
      : null}
  ${(props) => (props.hasTooltip ? hasTooltip : null)}
`;

export const HeaderCencosudCardModal = styled.div`
  display: none;
  position: absolute;
  width: 1000px;
  left: -600px;
  background-color: #ffffff;
  padding: 33px 50px;
  border-radius: 10px;
  top: 31px;
  z-index: 9;

  & a {
    text-decoration: none;
    color: #1a1a1a;
  }

  & :after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 66%;
    margin-left: -5px;
    border: 10px solid transparent;
    border-bottom-color: #fff;
  }

  & ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & ul li {
    color: #1a1a1a;
    font-family: OpenSans, sans-serif;
    font-size: 14px;
    position: relative;
    list-style: none;
  }

  & ul li span {
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  }

  & ul li:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    top: -8px;
    left: -32px;
  }

  & ul .wallet:before {
    background-image: url('/icons/header-top-brands/wallet.svg');
  }

  & ul .advance-simulation:before {
    background-image: url('/icons/header-top-brands/cash.svg');
  }

  & ul .bag:before {
    background-image: url('/icons/header-top-brands/bag.svg');
  }

  & ul .hand:before {
    background-image: url('/icons/header-top-brands/hand.svg');
  }
`;

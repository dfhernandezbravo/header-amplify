import styled from 'styled-components';

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

  div > span {
    font-size: 14px;
    font-weight: 400;
  }
`;

import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  color: #fff;
  padding: 0 1rem;

  &:first-child {
    padding-top: 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 300;
  cursor: pointer;
  border-bottom: 1px solid #666;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1.5rem;
  }

  & > div {
    position: relative;
    width: 16px;
    height: 16px;

    & :nth-child(1) {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }

    & :nth-child(2) {
      display: block;
      max-width: 16px;
      height: 2px;
      background-color: #fff;
      transform: rotate(90deg);
    }
  }
`;

export const Content = styled.div`
  padding: 0 0 1rem;

  a {
    font-size: 0.875rem;
    font-weight: 200;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`;

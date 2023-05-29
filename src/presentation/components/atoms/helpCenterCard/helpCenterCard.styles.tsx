import styled from 'styled-components';

export const HelpCard = styled.div`
  width: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    width: 15.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-weight: 400;
    color: #4d4d4d;
    text-decoration: none;

    & :first-child {
      font-weight: 700;
      font-weight: bold;
    }
  }

  &[data-mobile='false'] {
    &[data-border='true'] {
      border-right: 2px solid #eaeaea;
      border-left: 2px solid #eaeaea;
    }
  }

  &[data-mobile='true'] {
    flex-direction: row;
    width: 100%;
    padding: 1rem;

    a > p {
      text-align: start;
      padding-left: 1rem;
    }

    &[data-border='true'] {
      border-bottom: 2px solid #eaeaea;
      border-top: 2px solid #eaeaea;
    }
  }
`;

import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  top: -40px;
  max-width: 70.188rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateY(-50%);

  .newsletter__Title {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
    }
  }

  &:has(.subscribe) {
    padding: 0;
    margin: 0;

    p {
      font-size: 1rem;
    }
  }

  .subscribe {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.8rem 1rem;
  }
`;

export const NewsletterForm = styled.div`
  .newsletter__Inputs {
    input {
      font-size: 1rem;
      font-weight: 400;
      border-radius: 0.25rem;
      border: none;
      background-color: #f9f9f9;
      padding: 0.75rem 1rem;
      margin-right: 1rem;
      width: 15rem;
      ::placeholder {
        color: #c1c1c1;
      }
    }
  }

  .newsletter__CheckboxContainer {
    padding-top: 0.7rem;

    input {
      margin-right: 0.5rem;
    }

    a {
      font-size: 14px;
      color: #4d4d4d;
      text-decoration: none;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .custom-btn {
    margin-top: 2rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    overflow-x: hidden;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 2rem 2rem 0 2rem;

  & .input-text {
    font-size: 16px;
    width: 56px;
    height: 56px;
    text-align: center;
    border: 1px solid #aaaaaa;
    border-radius: 4px;

    @media (max-width: 1024px) {
      width: 46px;
      height: 46px;
      overflow-x: hidden;
    }
  }

  & .input-text:focus {
    border-color: #1a1a1a;
    outline: auto;
  }

  & .input-text::-webkit-outer-spin-button,
  .input-text::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

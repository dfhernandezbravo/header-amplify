import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  & .title {
    font-size: 18px;
    color: #333333;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;

  & .input {
    color: #363f45;
    font-size: 16px;
    font-weight: 600;
  }

  & .show-hide-input {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    text-decoration: underline;
    color: #485760;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ConditionContainer = styled.div`
  display: flex;
  gap: 5px;
  margin: 1rem 0;
  align-items: center;

  & .checkbox {
    width: 18px;
    height: 18px;
  }
  & .checkbox:checked {
    background-color: #485760;
  }
`;

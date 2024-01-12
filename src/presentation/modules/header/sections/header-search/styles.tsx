import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  background: #ffffff;
  border-radius: 28px;
`;

export const SearchInput = styled.input`
  border-radius: 28px;
  height: 40px;
  padding: 1rem;
  border: none;
  width: 100%;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 400;
  margin-left: 25px;
  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    background-image: url('/icons/general/close-icon.svg');
    cursor: pointer;
    background-repeat: no-repeat;
    margin-top: 5px;
  }
`;

export const IconSearchContainer = styled.div`
  position: absolute;
  left: 0;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 8px 0 16px;
  background-color: #fff;
  border-radius: 50%;
`;

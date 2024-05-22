import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  border-radius: 28px;
`;

export const SearchInput = styled.input`
  border-radius: 28px;
  height: 40px;
  padding: 1rem 1rem 1rem 0;
  border: none;
  width: 100%;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 400;
  background-color: white;
  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

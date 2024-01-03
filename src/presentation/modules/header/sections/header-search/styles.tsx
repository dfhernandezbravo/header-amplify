import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
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
  padding-right: 3rem;
  padding-left: 3rem;
`;

export const IconSearchContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 8px;
  background-color: transparent;
`;

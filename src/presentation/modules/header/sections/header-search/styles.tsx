import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  border-radius: 8px;
  height: 40px;
  padding: 1rem;
  border: none;
  width: 100%;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 400;
  padding-right: 3rem;
`;

export const IconSearchContainer = styled.div`
  color: #000;
  fill: #000;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 8px;
  background-color: #fff;
  border-left: 1px solid #d2d2d2;
`;

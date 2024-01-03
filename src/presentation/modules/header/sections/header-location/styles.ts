import styled from 'styled-components';

export const RegionalizerContainer = styled.div`
  position: relative;
  padding: 1rem;
  &:hover {
    padding: 1rem;
    background-color: #670000;
    border-radius: 28px;
  }
`;

export const ButtonRegionalizer = styled.button`
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #fff;
  text-align: left;
`;

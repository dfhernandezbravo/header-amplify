import styled from 'styled-components';

export const RegionalizerContainer = styled.div`
  position: relative;
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
  padding: 1rem;
  &:hover {
    padding: 0.5rem 1rem;
    background-color: #670000;
    border-radius: 28px;
  }

  @media only screen and (max-width: 1024px) {
    align-items: center;
    padding: 0;
    &:hover {
      padding: 0;
      background-color: transparent;
      border-radius: 0;
    }
  }
`;

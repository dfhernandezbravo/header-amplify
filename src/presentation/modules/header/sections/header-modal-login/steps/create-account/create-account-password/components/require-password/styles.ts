import styled from 'styled-components';

interface ValidatorContainerProps {
  isValid: boolean;
}

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ValidatorContainer = styled.div<ValidatorContainerProps>`
  display: flex;
  padding: 8px 12px;
  border-radius: 5px;
  gap: 8px;
  background-color: ${({ isValid }) => (isValid ? '#BAF7DC' : '#FFE6E6')};
`;

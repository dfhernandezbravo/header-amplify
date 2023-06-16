import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isOpen }) => (isOpen ? '#f7f9fa' : '')};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px;
  background-color: ${({ isOpen }) => (isOpen ? '#f7f9fa' : '')};
`;

export const AccordionTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

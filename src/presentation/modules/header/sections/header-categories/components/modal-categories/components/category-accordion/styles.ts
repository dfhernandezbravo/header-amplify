import styled from 'styled-components';

export const AccordionContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '50px')};
  transition: all 500ms ease;
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`
  padding: 10px 14px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isOpen }) => (isOpen ? '#f7f9fa' : '')};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? '10px' : '0 10px')};
  padding-top: 0;
  background-color: ${({ isOpen }) => (isOpen ? '#f7f9fa' : '')};
`;

export const AccordionTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: #485760;
`;

import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionTitle,
} from './styles';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const sizeIcon = 30;

const CategoryAccordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer isOpen={isOpen}>
      <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
        <AccordionTitle>{title}</AccordionTitle>

        {isOpen ? (
          <MdKeyboardArrowUp size={sizeIcon} color="#AF1212" />
        ) : (
          <MdKeyboardArrowDown size={sizeIcon} color="#485760" />
        )}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default CategoryAccordion;

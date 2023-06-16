import React, { useState } from 'react';
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionTitle,
} from './styles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

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
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
        <AccordionTitle>{title}</AccordionTitle>

        {isOpen ? (
          <MdKeyboardArrowUp size={sizeIcon} />
        ) : (
          <MdKeyboardArrowDown size={sizeIcon} />
        )}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default CategoryAccordion;

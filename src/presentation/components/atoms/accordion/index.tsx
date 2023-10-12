import { FooterLink } from '@entities/footer/footer.entity';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { AccordionContainer, Content, Title } from './accordion.styles';

interface AccordionProps {
  title: string;
  links: FooterLink[];
}

const ContentWrapper = styled.div<{ maxHeight?: number }>`
  max-height: ${(p) => `${p.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`;

const Accordion = ({ title, links }: AccordionProps) => {
  const [isExpanded, setExpanded] = useState<boolean>();

  const contentRef = useRef<HTMLDivElement>();
  const contentHeight = isExpanded ? contentRef.current?.scrollHeight : 0;

  const handleExpandToggle = useCallback(() => {
    setExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <AccordionContainer>
      <>
        <Title onClick={handleExpandToggle}>
          <p>{title}</p>
          <div>
            <span></span>
            {!isExpanded ? <span></span> : <></>}
          </div>
        </Title>
      </>

      {links.map((link) => (
        <ContentWrapper maxHeight={contentHeight} key={link.title}>
          <Content ref={contentRef}>
            <Link href={link.link}>{link.title}</Link>
          </Content>
        </ContentWrapper>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;

import { useCallback, useRef, useState } from "react";
import { AccordionContainer, Content, Title } from "./accordion.styles";
import styled from "styled-components";
import Link from "next/link";

interface Links {
    text: string;
    link: string;
}

interface AccordionProps {
    title: string;
    links: Links[];
}


const ContentWrapper:any = styled.div<{ maxHeight: number }>`
  max-height: ${(p) => `${p.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`;

const Accordion = ({ title, links }: AccordionProps) =>{

    const [isExpanded, setExpanded] = useState<boolean>();
    
    const contentRef = useRef<HTMLDivElement>();
    const contentHeight = isExpanded ? contentRef.current?.scrollHeight : 0;

    const handleExpandToggle = useCallback(()=>{
        setExpanded(!isExpanded);
        
    },[isExpanded]);

    return(
        <AccordionContainer>

        <>
            <Title onClick={handleExpandToggle}>
                <p>{title}</p>
                    {isExpanded ? (
                        <span data-color="red">-</span>
                    ) : (
                        <span>+</span>
                    )}
            </Title>
        </>

                {links.map( link =>(
                        <ContentWrapper maxHeight={contentHeight} key={link.text}>
                            <Content ref={contentRef}>
                                <Link href={link.link}>{link.text}</Link>
                            </Content>
                        </ContentWrapper>
                ))}
        </AccordionContainer>
    )
}

export default Accordion;


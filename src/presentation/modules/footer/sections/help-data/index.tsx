import React from 'react';
import Image from 'next/image';
import { HelpDataContainer, HelpDataItem } from './styles';

interface Props {
  helpData: FooterHelpData[];
}

const HelpDataFooter = ({ helpData }: Props) => {
  return (
    <HelpDataContainer>
      {helpData.map((help, index) => (
        <HelpDataItem
          href={help.link}
          key={help.title}
          iscentral={index === 1 ? 'true' : undefined}
        >
          <Image src={help.image} alt={help.title} width={60} height={60} />
          <div>
            <h4>{help.title}</h4>
            <span>{help.subtitle}</span>
          </div>
        </HelpDataItem>
      ))}
    </HelpDataContainer>
  );
};

export default HelpDataFooter;

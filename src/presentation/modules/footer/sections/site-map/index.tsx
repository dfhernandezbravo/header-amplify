import Accordion from '@components/atoms/accordion';
import Desktop from '@components/layout/desktop';
import Mobile from '@components/layout/mobile';
import React from 'react';
import { SiteMapLink, SiteMapLinkContainer, SiteMapLinkItem } from './styles';
import { VerticalDivider } from '@modules/footer/styles';

interface Props {
  data: FooterSiteMap[];
}

const SiteMapLinksFooter = ({ data }: Props) => {
  return (
    <>
      <Desktop>
        <SiteMapLinkContainer>
          {data.map((site) => (
            <SiteMapLinkItem key={site.title}>
              <h4>{site.title}</h4>
              {site.links.map((link) => (
                <SiteMapLink href={link.link} key={link.title}>
                  {link.title}
                </SiteMapLink>
              ))}
            </SiteMapLinkItem>
          ))}
        </SiteMapLinkContainer>
        <VerticalDivider />
      </Desktop>
      <Mobile>
        <div>
          {data.map((site) => (
            <Accordion title={site.title} links={site.links} key={site.title} />
          ))}
        </div>
      </Mobile>
    </>
  );
};

export default SiteMapLinksFooter;

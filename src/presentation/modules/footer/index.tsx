import Newsletter from '@components/organisms/newsletterForm';
import getFooterData from '@use-cases/footer/get-footer-data';
import { useEffect, useState } from 'react';
import HelpDataFooter from './sections/help-data';
import LegalLinksFooter from './sections/legal-links';
import PaymentsLinkFooter from './sections/payments-link';
import SiteMapLinksFooter from './sections/site-map';
import SocialLinksFooter from './sections/social-links';
import {
  FooterBlackContainer,
  FooterSocialContainer,
  HorizontalDivider,
  SectionLinksContainer,
} from './styles';

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData | undefined>();

  useEffect(() => {
    (async () => {
      const data = await getFooterData();
      setFooterData(data?.['footer-data']);
    })();
  }, []);

  if (!footerData) return null;

  return (
    <>
      <HelpDataFooter helpData={footerData['help-data']} />
      <FooterBlackContainer>
        <Newsletter />
        <SectionLinksContainer>
          <SiteMapLinksFooter data={footerData['site-map']} />
          <FooterSocialContainer>
            <SocialLinksFooter data={footerData['social-links']} />
            <PaymentsLinkFooter data={footerData['payments-links']} />
          </FooterSocialContainer>
        </SectionLinksContainer>
        <HorizontalDivider />
        <LegalLinksFooter
          data={footerData['legal-links']}
          copyrigth={footerData.copyright}
        />
      </FooterBlackContainer>
    </>
  );
};
export default Footer;

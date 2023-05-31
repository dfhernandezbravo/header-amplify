import PostFooter from '@components/organisms/postFooter';
import { FooterContainer } from './footer.styles';
import InfoFooter from '@components/organisms/infoFooter';
import HelpCenter from '@components/organisms/helpCenter';

const Footer = () => {
  return (
    <FooterContainer>
      <HelpCenter />
      <InfoFooter />
      <PostFooter />
    </FooterContainer>
  );
};
export default Footer;

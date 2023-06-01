import HelpCenter from '@components/organisms/helpCenter';
import InfoFooter from '@components/organisms/infoFooter';
import PostFooter from '@components/organisms/postFooter';
import { FooterContainer } from './footer.styles';

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

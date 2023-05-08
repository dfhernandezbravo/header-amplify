import PostFooter from "@/components/organisms/postFooter";
import { FooterContainer } from "./footer.styles";
import InfoFooter from "@/components/organisms/infoFooter";
import Newsletter from "@/components/organisms/newsletterForm";

const Footer = () => {

    return(
        <FooterContainer>
            <Newsletter />
            <InfoFooter />
            <PostFooter />
        </FooterContainer>
    )
}
export default Footer;
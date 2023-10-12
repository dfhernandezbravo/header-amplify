import { FooterLink } from '@entities/footer/footer.entity';
import { LegalLink, LegalLinkContainer } from './styles';

interface Props {
  copyrigth: string;
  data: FooterLink[];
}
const LegalLinksFooter = ({ data, copyrigth }: Props) => {
  return (
    <LegalLinkContainer>
      <span>{copyrigth}</span>
      {data.map((item, index) => (
        <LegalLink
          href={item.link}
          key={item.title}
          isfirst={index === 0 ? 'true' : undefined}
        >
          {item.title}
        </LegalLink>
      ))}
    </LegalLinkContainer>
  );
};

export default LegalLinksFooter;

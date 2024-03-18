import { useDevice } from '@cencosud-ds/easy-design-system';
import { FooterSocialLinks } from '@entities/footer/footer.entity';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Links } from './style';

interface Props {
  data: FooterSocialLinks[];
}

const SocialLinksFooter = ({ data }: Props) => {
  const { device } = useDevice();
  return (
    <Container mobile={device !== 'Desktop'}>
      <h4>Siguenos</h4>
      <Links>
        {data.map((item) => (
          <Link href={item.link} key={item.title}>
            <Image src={item.icon} width={40} height={40} alt={item.title} />
          </Link>
        ))}
      </Links>
    </Container>
  );
};

export default SocialLinksFooter;

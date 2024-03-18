import { useDevice } from '@cencosud-ds/easy-design-system';
import { FooterPaymentsLinks } from '@entities/footer/footer.entity';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Links } from './style';

interface Props {
  data: FooterPaymentsLinks[];
}

const PaymentsLinkFooter = ({ data }: Props) => {
  const { device } = useDevice();
  return (
    <Container mobile={device !== 'Desktop'}>
      <h4>Medios de pago</h4>
      <Links>
        {data.map((payment) => (
          <Link href="" key={payment.title}>
            <Image
              src={payment.icon}
              alt={payment.title}
              width={40}
              height={40}
            />
          </Link>
        ))}
      </Links>
    </Container>
  );
};

export default PaymentsLinkFooter;

import { FooterPaymentsLinks } from '@entities/footer/footer.entity';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: FooterPaymentsLinks[];
}

const PaymentsLinkFooter = ({ data }: Props) => {
  return (
    <div>
      <h4>Medios de pago</h4>
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
    </div>
  );
};

export default PaymentsLinkFooter;

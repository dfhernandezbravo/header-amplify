import Image from 'next/image';
import Link from 'next/link';
import { HelpCard } from './helpCenterCard.styles';

interface HelpCenterCardProps {
  image: string;
  title: string;
  subtitle: string;
  border: boolean;
  link: string;
  width: number;
  height: number;
}

const HelpCenterCard = ({
  image,
  title,
  subtitle,
  link,
  border,
  height,
  width,
}: HelpCenterCardProps) => {
  return (
    <HelpCard data-border={border}>
      <Image
        src={image}
        height={height}
        width={width}
        alt="Help Center Image"
      />
      <Link href={link}>
        <p>{title}</p>
        <p>{subtitle}</p>
      </Link>
    </HelpCard>
  );
};

export default HelpCenterCard;

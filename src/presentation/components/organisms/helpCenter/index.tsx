import { HelpCenterWrapper } from './helpCenter.styles';
import CardsData from '@mocks/footerCard-data.json';
import HelpCenterCard from '@components/atoms/helpCenterCard';

const HelpCenter = () => {
  return (
    <HelpCenterWrapper>
      {CardsData.map((item) => (
        <HelpCenterCard
          key={item.title}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          border={item.border}
          link={item.link}
          width={item.width}
          height={item.height}
        />
      ))}
    </HelpCenterWrapper>
  );
};

export default HelpCenter;

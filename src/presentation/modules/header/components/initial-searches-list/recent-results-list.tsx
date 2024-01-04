import useAnalytics from '@hooks/useAnalytics';
import {
  IconRightContainer,
  IconLeftContainer,
  RecentSearchItem,
  ItemRecentResult,
  ContainerRecents,
} from './styles';
import IconCross from '@assets/icons/categories/icon-cross.svg';
import IconRecent from '@assets/icons/categories/icon-recent.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const RecentResultsList = () => {
  const { sendEventAnalytics } = useAnalytics();
  const router = useRouter();

  const handleOnClick = (term: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Término Búsqueda recientes',
      tag: term,
    });
  };

  const recentResults = [
    {
      value: 'silla playa',
    },
    {
      value: 'play',
    },
    {
      value: 'juegos playa',
    },
    {
      value: 'playa',
    },
    {
      value: 'manta playa',
    },
    {
      value: 'playa',
    },
    {
      value: 'playa',
    },
    {
      value: 'playa',
    },
    {
      value: 'playa',
    },
    {
      value: 'playa',
    },
  ];

  return (
    <ContainerRecents>
      {recentResults?.length > 0 && <h4>Búsquedas recientes</h4>}
      {recentResults?.length > 0 &&
        recentResults.map((result, index) => (
          <RecentSearchItem key={result.value + index}>
            <IconLeftContainer
              onClick={(e) => {
                e.stopPropagation();
                handleOnClick(result.value);
                router.push(`/search/${result.value}`);
              }}
            >
              <Image
                src={IconRecent}
                alt={result.value}
                width={20}
                height={20}
                priority
              />
            </IconLeftContainer>
            <ItemRecentResult
              onClick={(e) => {
                e.stopPropagation();
                handleOnClick(result.value);
                router.push(`/search/${result.value}`);
              }}
            >
              {result.value}
            </ItemRecentResult>
            <IconRightContainer
              onClick={(e) => {
                e.stopPropagation();
                console.log('>>> Quit recent result value', result.value);
              }}
            >
              <Image
                src={IconCross}
                alt={result.value}
                width={16}
                height={16}
                priority
              />
            </IconRightContainer>
          </RecentSearchItem>
        ))}
    </ContainerRecents>
  );
};

export default RecentResultsList;

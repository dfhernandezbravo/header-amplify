import useAnalytics from '@hooks/useAnalytics';
import {
  RemoveIconButton,
  IconLeftContainer,
  RecentSearchItem,
  ItemRecentResult,
  ContainerRecents,
} from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import {
  closeResults,
  removeRecentSearch,
} from '@store/search/slices/search-slice';

const RecentResultsList = () => {
  const { sendEventAnalytics } = useAnalytics();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { recentSearches } = useAppSelector((state) => state.search);

  const handleOnClick = (term: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Término Búsqueda recientes',
      tag: term,
    });
    setTimeout(() => {
      dispatch(closeResults());
    }, 100);
  };

  const handleRemoveTerm = (term: string) => {
    dispatch(removeRecentSearch(term));
  };

  if (!recentSearches.length) return null;

  return (
    <ContainerRecents>
      <h4>Búsquedas recientes</h4>
      {recentSearches.map((result, index) => (
        <RecentSearchItem key={result + index}>
          <IconLeftContainer
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick(result);
              router.push(`/search/${result}`);
            }}
          >
            <Image
              src="/icons/categories/icon-recent.svg"
              alt={result}
              width={20}
              height={20}
              priority
            />
          </IconLeftContainer>
          <ItemRecentResult
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick(result);
              router.push(`/search/${result}`);
            }}
          >
            {result}
          </ItemRecentResult>
          <RemoveIconButton
            id="remove-recent-search"
            onClick={() => handleRemoveTerm(result)}
          >
            <Image
              src="/icons/categories/icon-cross.svg"
              alt={result}
              width={16}
              height={16}
              priority
            />
          </RemoveIconButton>
        </RecentSearchItem>
      ))}
    </ContainerRecents>
  );
};

export default RecentResultsList;

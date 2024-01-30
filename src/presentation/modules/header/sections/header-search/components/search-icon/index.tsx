import Image from 'next/image';
import { SearchIconContainer } from './styles';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks/storeHooks';
import {
  closeResults,
  setRecentSearches,
} from '@store/search/slices/search-slice';

type Props = {
  search: string;
};
const SearchIcon = (props: Props) => {
  const { search } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(setRecentSearches(search));
    dispatch(closeResults());
    router.push(`/search/${search}`);
  };

  return (
    <SearchIconContainer onClick={handleClick}>
      <Image
        width={16}
        height={16}
        src="/icons/categories/icon-search.svg"
        alt="search"
        priority
      />
    </SearchIconContainer>
  );
};

export default SearchIcon;

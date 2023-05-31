import easyBffMobileInstance from '@data-sources/http-instances/easy-bff-mobile-instance';
import { useQuery } from 'react-query';
import searchRepository from '@repositories/search/search-repository';
import KeysData from '../../env/keys-data';
import GetSearchesPopularResponse from '@entities/responses/get-searches-popular.response';

function useGetSearchesPopular() {
  const repository = searchRepository(easyBffMobileInstance);

  return useQuery<GetSearchesPopularResponse>(
    [KeysData.SEARCHES_POPULAR],
    repository.getSearchesPopulars,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  );
}

export default useGetSearchesPopular;

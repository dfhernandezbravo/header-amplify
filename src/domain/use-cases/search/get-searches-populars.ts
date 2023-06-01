import easyBffMobileInstance from '@data-sources/http-instances/easy-bff-mobile-instance';
import searchRepository from '@repositories/search/search-repository';

async function useGetSearchesPopular() {
  const repository = searchRepository(easyBffMobileInstance);
  const { data } = await repository.getSearchesPopulars();

  return data;
}

export default useGetSearchesPopular;

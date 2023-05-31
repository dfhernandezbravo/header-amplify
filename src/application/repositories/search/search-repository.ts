import GetSearchesPopularResponse from '@entities/responses/get-searches-popular.response';
import SearchRepository from '@interfaces/search-repository.interface';
import { AxiosInstance } from 'axios';

function searchRepository(httpInstance: AxiosInstance): SearchRepository {
  return {
    getSearchesPopulars() {
      return httpInstance.get<GetSearchesPopularResponse>(
        'products/search/popular',
      );
    },
  };
}

export default searchRepository;

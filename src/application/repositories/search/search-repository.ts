import GetPopularSearchesResponse from '@entities/requests/search/get/get-popular-searches.response';
import SearchRepository from '@interfaces/search-repository.interface';
import { AxiosInstance } from 'axios';

function searchRepository(httpInstance: AxiosInstance): SearchRepository {
  return {
    getPopularSearches() {
      return httpInstance.get<GetPopularSearchesResponse>(
        'products/search/popular',
      );
    },
  };
}

export default searchRepository;

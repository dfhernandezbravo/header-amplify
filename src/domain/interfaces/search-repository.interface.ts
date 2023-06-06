import GetPopularSearchesResponse from '@entities/requests/search/get/get-popular-searches.response';
import { AxiosResponse } from 'axios';

interface SearchRepository {
  getPopularSearches(): Promise<AxiosResponse<GetPopularSearchesResponse>>;
}

export default SearchRepository;

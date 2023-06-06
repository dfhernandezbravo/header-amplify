import GetPopularSearchesResponse from '@entities/responses/get-popular-searches.response';
import { AxiosResponse } from 'axios';

interface SearchRepository {
  getPopularSearches(): Promise<AxiosResponse<GetPopularSearchesResponse>>;
}

export default SearchRepository;

import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
} from '@entities/search/searches.response';
import { AxiosResponse } from 'axios';

interface SearchService {
  getPopularSearches(): Promise<AxiosResponse<GetPopularSearchesResponse>>;
  getSearches(
    params: GetSearchesRequest,
  ): Promise<AxiosResponse<GetSearchesResponse>>;
}

export default SearchService;

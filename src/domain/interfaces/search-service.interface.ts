import {
  GetSearchesRequest,
  ProductSuggestionsRequest,
} from '@entities/search/searches.request';
import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
  GetSuggestionsResponse,
} from '@entities/search/searches.response';
import { AxiosResponse } from 'axios';

interface SearchService {
  getPopularSearches(): Promise<AxiosResponse<GetPopularSearchesResponse>>;
  getSearches(
    params: GetSearchesRequest,
  ): Promise<AxiosResponse<GetSearchesResponse>>;
  getProductSuggestions(
    params: ProductSuggestionsRequest,
  ): Promise<AxiosResponse<GetSuggestionsResponse>>;
}

export default SearchService;

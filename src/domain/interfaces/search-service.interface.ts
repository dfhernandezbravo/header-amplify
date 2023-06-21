import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
  ProductSuggestionsResponse,
} from '@entities/search/searches.response';
import { AxiosResponse } from 'axios';

interface SearchService {
  getPopularSearches(): Promise<AxiosResponse<GetPopularSearchesResponse>>;
  getSearches(
    params: GetSearchesRequest,
  ): Promise<AxiosResponse<GetSearchesResponse>>;
  getProductSuggestions(
    params: ProductSuggestionsRequest,
  ): Promise<AxiosResponse<ProductSuggestionsResponse>>;
}

export default SearchService;

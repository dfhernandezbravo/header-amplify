import { bffWebInstance } from './../../data-sources/bbf-web-instance';
import {
  GetSearchesRequest,
  ProductSuggestionsRequest,
} from '@entities/search/searches.request';
import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
  GetSuggestionsResponse,
} from '@entities/search/searches.response';
import SearchService from '@interfaces/search-service.interface';

const searchService: SearchService = {
  getPopularSearches() {
    return bffWebInstance.get<GetPopularSearchesResponse>('/search/popular');
  },
  getSearches(params: GetSearchesRequest) {
    return bffWebInstance.get<GetSearchesResponse>('/search/autocomplete', {
      params,
    });
  },
  getProductSuggestions(params: ProductSuggestionsRequest) {
    return bffWebInstance.get<GetSuggestionsResponse>(
      '/search/product-suggestions',
      {
        params: { query: params.fullText },
      },
    );
  },
};
export default searchService;

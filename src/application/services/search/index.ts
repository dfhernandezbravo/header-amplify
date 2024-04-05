import { bffWebInstance } from './../../data-sources/bbf-web-instance';
import {
  GetSearchesRequest,
  ProductSuggestionsRequest,
} from '@entities/search/searches.request';
import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
  ProductSuggestionsResponse,
} from '@entities/search/searches.response';
import SearchService from '@interfaces/search-service.interface';
import axios from 'axios';

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
    return axios.post<ProductSuggestionsResponse>(
      '/api/products/search/suggestions',
      { selectedFacets: params.selectedFacets },
      { params: { fullText: params.fullText } },
    );
  },
};
export default searchService;

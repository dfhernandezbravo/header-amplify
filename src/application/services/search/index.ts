import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
  ProductSuggestionsResponse,
} from '@entities/search/searches.response';
import SearchService from '@interfaces/search-service.interface';
import axios from 'axios';

const searchService: SearchService = {
  getPopularSearches() {
    return axios.get<GetPopularSearchesResponse>(
      '/api/products/search/popular',
    );
  },
  getSearches(params: GetSearchesRequest) {
    return axios.get<GetSearchesResponse>('/api/products/search/autocomplete', {
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

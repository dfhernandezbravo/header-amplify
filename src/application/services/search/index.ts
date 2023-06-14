import {
  GetPopularSearchesResponse,
  GetSearchesResponse,
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
};
export default searchService;

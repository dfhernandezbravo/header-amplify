import GetSearchesPopularResponse from '@entities/responses/get-searches-popular.response';
import { AxiosResponse } from 'axios';

interface SearchRepository {
  getSearchesPopulars(): Promise<AxiosResponse<GetSearchesPopularResponse>>;
}

export default SearchRepository;

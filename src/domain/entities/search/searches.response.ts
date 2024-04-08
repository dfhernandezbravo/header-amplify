import PopularSearch from './popular-search.entity';
import { ItemSearch, Product, Search } from './searches.entity';

type GetSearchesResponse = {
  searches: Search[];
  categories: ItemSearch[];
  brands: ItemSearch[];
  products: Product[];
};

type GetPopularSearchesResponse = {
  searches: PopularSearch[];
};

export type { GetSearchesResponse, GetPopularSearchesResponse };

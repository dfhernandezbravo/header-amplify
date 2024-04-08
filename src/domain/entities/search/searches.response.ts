import PopularSearch from './popular-search.entity';
import { ItemSearch, Product, Search } from './searches.entity';

type GetSearchesResponse = {
  searches: Search[];
  categories: ItemSearch[];
  brands: ItemSearch[];
};

type GetPopularSearchesResponse = {
  searches: PopularSearch[];
};

type ProductSuggestionsResponse = {
  products: Product[];
};

export type {
  GetSearchesResponse,
  GetPopularSearchesResponse,
  ProductSuggestionsResponse,
};

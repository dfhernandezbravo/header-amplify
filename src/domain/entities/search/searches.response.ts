import PopularSearch from './popular-search.entity';

type GetSearchesResponse = {
  searches: Search[];
  categories: CategoriesSearch[];
};

type GetPopularSearchesResponse = {
  data: {
    searches: PopularSearch[];
  };
};

type ProductSuggestionsResponse = {
  products: Product[];
};

export type {
  GetSearchesResponse,
  GetPopularSearchesResponse,
  ProductSuggestionsResponse,
};

import PopularSearch from './popular-search.entity';

type GetSearchesResponse = {
  data: {
    searches: Search[];
  };
};

type GetPopularSearchesResponse = {
  data: {
    searches: PopularSearch[];
  };
};

export type { GetSearchesResponse, GetPopularSearchesResponse };

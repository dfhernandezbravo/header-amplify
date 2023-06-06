import PopularSearch from '@entities/business/search/popular-search.entity';

type GetPopularSearchesResponse = {
  data: {
    searches: PopularSearch[];
  };
};

export default GetPopularSearchesResponse;

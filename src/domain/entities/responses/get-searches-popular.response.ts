import SearchPopular from '@entities/business/search-popular.entity';

type GetSearchesPopularResponse = {
  data: {
    searches: SearchPopular[];
  };
};

export default GetSearchesPopularResponse;

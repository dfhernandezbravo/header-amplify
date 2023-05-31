interface SearchRepository {
  getSearchesPopulars(): Promise<any>;
}

export default SearchRepository;

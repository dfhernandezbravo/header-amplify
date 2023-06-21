type GetSearchesRequest = {
  query: string;
};

type ProductSuggestionsRequest = {
  selectedFacets: {
    key: string;
    value: string;
  } | null;
  fullText: string;
};

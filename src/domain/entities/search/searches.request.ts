export type GetSearchesRequest = {
  query: string;
};

export type ProductSuggestionsRequest = {
  selectedFacets: {
    key: string;
    value: string;
  } | null;
  fullText: string;
};

export const useRecentSearches = () => {
  const RECENT_SEARCHES = 'recentSearches';
  const MAX_ITEMS = 7;

  const getRecentSearches = (): string[] => {
    const recentSearchesLS = localStorage.getItem(RECENT_SEARCHES);
    if (!recentSearchesLS) {
      return [];
    }

    return JSON.parse(recentSearchesLS);
  };

  const setItemsToLocalStorage = (items: string[]) => {
    localStorage.setItem(RECENT_SEARCHES, JSON.stringify(items));
  };

  const setRecentSearches = (term: string) => {
    if (!term) return;

    const recentSearches = getRecentSearches();
    if (recentSearches.length === 0) {
      const newSearchTerm = [];
      newSearchTerm.push(term);
      setItemsToLocalStorage(newSearchTerm);
      return;
    }

    if (recentSearches.includes(term)) return;

    if (recentSearches.length === MAX_ITEMS) {
      recentSearches.pop();
    }

    recentSearches.unshift(term);
    setItemsToLocalStorage(recentSearches);
  };

  const removeRecentSearch = (term: string) => {
    const recentSearches = getRecentSearches();
    if (recentSearches.length === 0) return recentSearches;

    const updatedRecentSearches = recentSearches.filter(
      (recentSearch) => recentSearch !== term,
    );

    setItemsToLocalStorage(updatedRecentSearches);
    return updatedRecentSearches;
  };

  return {
    getRecentSearches,
    setRecentSearches,
    removeRecentSearch,
  };
};

import Spinner from '@components/atoms/spinner';
import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { SuggestionSpinnerContainer } from './styles';
import HeaderSuggestionsDesktop from './layouts/header-suggestions-desktop';
import HeaderSuggestionsMobile from './layouts/header-suggestions-mobile';

const HeaderSuggestions = () => {
  const { isLoadingSuggestions } = useAppSelector((state) => state.search);

  if (isLoadingSuggestions) {
    return (
      <SuggestionSpinnerContainer>
        <Spinner />
      </SuggestionSpinnerContainer>
    );
  }

  return (
    <>
      <HeaderSuggestionsDesktop />
      <HeaderSuggestionsMobile />
    </>
  );
};

export default HeaderSuggestions;

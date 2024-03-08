import React from 'react';
import HeaderSuggestionsDesktop from './layouts/header-suggestions-desktop';
import HeaderSuggestionsMobile from './layouts/header-suggestions-mobile';

const HeaderSuggestions = () => {
  return (
    <>
      <HeaderSuggestionsDesktop />
      <HeaderSuggestionsMobile />
    </>
  );
};

export default HeaderSuggestions;

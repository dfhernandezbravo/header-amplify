import React from 'react';
import HeaderSuggestionsDesktop from './layouts/header-suggestions-desktop';
import HeaderSuggestionsMobile from './layouts/header-suggestions-mobile';
import { Layout } from '@cencosud-ds/easy-design-system';

const HeaderSuggestions = () => {
  return (
    <>
      <Layout is={['Desktop']}>
        <HeaderSuggestionsDesktop />
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <HeaderSuggestionsMobile />
      </Layout>
    </>
  );
};

export default HeaderSuggestions;

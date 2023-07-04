import React from 'react';
import { EmptySearchContainer } from './styles';

const EmptySearch = () => {
  return (
    <EmptySearchContainer>
      <h4>Sin sugerencias </h4>
      <p>
        Revisa si tu búsqueda está bien escrita, intenta con otro término o
        navega entre las categorías.
      </p>
    </EmptySearchContainer>
  );
};

export default EmptySearch;

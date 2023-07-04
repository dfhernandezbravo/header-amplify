import React from 'react';
import {
  SearchMobileContainer,
  SearchMobileContent,
  SearchMobileHeader,
} from './styles';
import HeaderSearch from '../header-search';
import HeaderResults from '../header-results';
import ButtonBack from '@components/atoms/button-back';
import { useAppDispatch } from '@hooks/storeHooks';
import { closeResults } from '@store/search/slices/search-slice';

const HeaderSearchMobile = () => {
  const dispatch = useAppDispatch();

  return (
    <SearchMobileContainer>
      <SearchMobileContent>
        <SearchMobileHeader>
          <ButtonBack onClick={() => dispatch(closeResults())} />
          <HeaderSearch />
        </SearchMobileHeader>
        <HeaderResults />
      </SearchMobileContent>
    </SearchMobileContainer>
  );
};

export default HeaderSearchMobile;

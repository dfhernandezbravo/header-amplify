import React from 'react';
import {
  SearchMobileContainer,
  SearchMobileContent,
  SearchMobileHeader,
} from './styles';
import HeaderSearch from '../header-search';
import HeaderResults from '../header-results';
import { useAppDispatch } from '@hooks/storeHooks';
import { closeResults } from '@store/search/slices/search-slice';
import CancelButton from '@components/atoms/cancel-button';

const HeaderSearchMobile = () => {
  const dispatch = useAppDispatch();

  return (
    <SearchMobileContainer>
      <SearchMobileContent>
        <SearchMobileHeader>
          <HeaderSearch />
          <CancelButton onClick={() => dispatch(closeResults())} />
        </SearchMobileHeader>
        <HeaderResults />
      </SearchMobileContent>
    </SearchMobileContainer>
  );
};

export default HeaderSearchMobile;

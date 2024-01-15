import styled from 'styled-components';

export const HeaderMobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #af1212;
  color: white;
  padding: 0.7rem;
`;

export const HeaderMobileSearchSection = styled.div`
  width: 100%;
  padding: 12px 16px;
  height: 65px;
  position: relative;
  & ::placeholder {
    padding-left: 1rem;
  }
  & .search-icon {
    position: absolute;
    top: 48%;
    left: 24px;
    transform: translate(0, -50%);

    @media (min-width: 1024px) {
      top: 45%;
      width: 24px;
      height: 24px;
    }
  }
`;

export const SearchInputContainer = styled.input`
  border-radius: 28px;
  height: 40px;
  padding: 1rem;
  border: none;
  width: 100%;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 400;
  background-color: white;
`;

export const IconSearchContainer = styled.div`
  color: #000;
  fill: #000;
  position: absolute;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 8px 0 16px;
  background-color: #fff;
`;

export const FirsRowMobile = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const SecondRowMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

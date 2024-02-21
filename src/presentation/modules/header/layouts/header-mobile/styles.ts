import styled from 'styled-components';

export const HeaderMobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #af1212;
  color: white;
  padding: 10px 0.7rem;
`;

export const HeaderMobileSearchSection = styled.div`
  width: 100%;
  padding: 12px 16px;
  height: 65px;
  position: relative;
  margin-left: 0.75rem;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 28px;
  height: 40px;
`;

export const SearchInputContainer = styled.input`
  border: none;
  width: 100%;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 400;
  background-color: white;
  width: 100%;
  border: none;
  outline: none;
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
  align-items: center;
`;

export const SecondRowMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

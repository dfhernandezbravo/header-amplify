import styled from 'styled-components';

export const ListAddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 20px;
  padding: 20px;
  color: #000;
  @media only screen and (max-width: 768px) {
    width: auto;
  }
`;

export const ListAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 250px;
  padding: 0px 4px;
  overflow-y: scroll;
  scrollbar-width: auto;
  scrollbar-color: #888888 transparent;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6e8391; /* Color del thumb */
    border-radius: 5px; /* Borde del thumb */
  }
  @media only screen and (max-width: 768px) {
    max-height: 210px;
  }
`;

export const ButtonNewAddress = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  color: #485760;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export const HeaderNewAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  & .newaddress-title {
    font-weight: 400;
  }
`;

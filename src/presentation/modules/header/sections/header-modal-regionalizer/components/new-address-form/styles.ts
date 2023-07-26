import styled from 'styled-components';

export const NewAddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  max-width: 450px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & label {
    font-size: 14px;
  }
`;

export const SelectNewAddressForm = styled.select`
  padding: 16px 20px;
  border-radius: 4px;
  border: 1px solid #dfe3e7;
  color: #475f7b;
  font-size: 16px;
`;

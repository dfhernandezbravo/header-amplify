import styled from 'styled-components';

export const NewAddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  max-width: 450px;
  color: black;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[100]};

  & label {
    font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  }
`;

export const FormComtainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[200]};
`

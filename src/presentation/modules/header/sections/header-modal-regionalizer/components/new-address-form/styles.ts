import styled from 'styled-components';

export const NewAddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  max-width: 385px;
  color: black;
  & .description {
    font-size: ${({ theme: { fontSize } }) => fontSize[200]};
    color: #363f45;
  }

  @media only screen and (max-width: 780px) {
    max-width: 100%;
  }
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
`;

export const ButtonArrowLeftBackContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  & span {
    color: #485760;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const MobileBackButton = styled.button`
  margin-top: 2.25rem;
  text-align: center;
  text-decoration: underline;
  color: #6e8391;
  font-weight: 700;
  line-height: 1.25rem;
  font-size: 1rem;
  background: none;
  border: none;
`;

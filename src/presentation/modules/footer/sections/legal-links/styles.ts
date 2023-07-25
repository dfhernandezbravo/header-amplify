import Link from 'next/link';
import styled from 'styled-components';

export const LegalLinkContainer = styled.div`
  font-size: 12px;
  padding: 12px 0;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const LegalLink = styled(Link)<{
  isfirst: boolean | string | undefined;
}>`
  text-decoration: none;
  color: white;
  border-left: ${(props) => (!props.isfirst ? '1px solid white' : 'none')};
  padding: 0 20px;

  @media (max-width: 750px) {
    border-left: none;
  }
`;

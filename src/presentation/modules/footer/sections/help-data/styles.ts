import Link from 'next/link';
import styled from 'styled-components';

export const HelpDataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  padding-bottom: 60px;

  @media (max-width: 1025px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HelpDataItem = styled(Link)<{
  iscentral: boolean | string | undefined;
}>`
  padding: 12px;
  border-left: ${(props) =>
    props.iscentral ? ' 2px solid rgb(234, 234, 234)' : 'none'};
  border-right: ${(props) =>
    props.iscentral ? ' 2px solid rgb(234, 234, 234)' : 'none'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  text-align: center;

  @media (max-width: 1025px) {
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    border-top: ${(props) =>
      props.iscentral ? ' 2px solid rgb(234, 234, 234)' : 'none'};
    border-bottom: ${(props) =>
      props.iscentral ? ' 2px solid rgb(234, 234, 234)' : 'none'};
    border-left: none;
    border-right: none;
  }
`;

import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  border: 1px solid #000c24;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  width: 100%;
  margin-top: 4rem;
  padding: 0 1 rem;
  position: relative;

  @media (max-width: 1026px){
    margin-top: 0;
  }
`;


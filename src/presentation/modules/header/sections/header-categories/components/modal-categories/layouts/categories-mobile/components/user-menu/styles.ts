import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #acacac;
  & .greating {
    color: #6e8391;
    & .greating-user-name {
      font-weight: 600;
    }
  }
`;

export const UserMenuItem = styled.div`
  padding: 10px 0;
`;

import { styled } from 'styled-components';

type ContainerProps = {
  mobile?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.mobile ? 'center' : 'flex-start')};
  margin: ${(props) => (props.mobile ? '0 auto' : '0')};
  text-align: ${(props) => (props.mobile ? 'center' : 'left')};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

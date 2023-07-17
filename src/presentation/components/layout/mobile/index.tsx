import useBreakpoints from '@hooks/useBreakpoints';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Mobile: React.FC<Props> = ({ children }) => {
  const { isXs, isSm, isMd } = useBreakpoints();

  return isXs || isSm || isMd ? <>{children}</> : null;
};

export default Mobile;

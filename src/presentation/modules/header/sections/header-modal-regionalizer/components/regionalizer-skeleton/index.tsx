import React from 'react';
import { Container } from './style';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const RegionalizerSkeleton = () => {
  return (
    <Container>
      <Skeleton
        animation="wave"
        height="50px"
        width="100%"
        borderRadius="8px"
      />
      <Skeleton
        animation="wave"
        height="50px"
        width="100%"
        borderRadius="8px"
      />
      <Skeleton
        animation="wave"
        height="50px"
        width="100%"
        borderRadius="8px"
      />
    </Container>
  );
};

export default RegionalizerSkeleton;

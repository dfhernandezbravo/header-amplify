import React from 'react';
import { Container } from './style';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const RegionalizerSkeleton = () => {
  return (
    <Container>
      <Skeleton
        animation="wave"
        height={50}
        width={200}
        key={`regionalizer-skeleton`}
      />
    </Container>
  );
};

export default RegionalizerSkeleton;

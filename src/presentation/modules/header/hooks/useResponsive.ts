import { useMediaQuery } from '@uidotdev/usehooks';

export type ResponsiveDevice = {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
};

export function useResponsive() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 768px) and (max-width : 1023px)',
  );
  const isLargeDevice = useMediaQuery(
    'only screen and (min-width : 1024px) and (max-width : 1200px)',
  );
  const isExtraLargeDevice = useMediaQuery(
    'only screen and (min-width : 1201px)',
  );

  return {
    isSm: isSmallDevice,
    isMd: isMediumDevice,
    isLg: isLargeDevice,
    isXl: isExtraLargeDevice,
  };
}

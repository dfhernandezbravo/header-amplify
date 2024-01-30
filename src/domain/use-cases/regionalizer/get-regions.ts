import regionalizerService from '@services/regionalizer';

const getRegionalizerRegions = async () => {
  try {
    const { data } = await regionalizerService.getRegions();
    const regions = data.value;
    const indexOfPreselectedRegion = regions.findIndex(
      (region) => region.name === 'Metropolitana',
    );
    let highlightedRegion = regions.splice(indexOfPreselectedRegion, 1)[0];
    let regionOrdered = regions.sort((a, b) => a.name.localeCompare(b.name));
    regionOrdered.unshift(highlightedRegion);

    return regionOrdered;
  } catch (error) {
    return [];
  }
};

export default getRegionalizerRegions;

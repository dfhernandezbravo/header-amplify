import regionalizerService from '@services/regionalizer';

const getRegionalizerRegions = async () => {
  try {
    const { data } = await regionalizerService.getRegions();
    return data.value;
  } catch (error) {
    return [];
  }
};

export default getRegionalizerRegions;

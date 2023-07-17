import cmsInstance from '@data-sources/cms-instance';
import RegionalizerService from '@interfaces/regionalizer-service.interface';

const regionalizerService: RegionalizerService = {
  getRegions: () => cmsInstance.get('/Shipping/regionComunas'),
};

export default regionalizerService;

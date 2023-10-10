import RegionalizerService from '@interfaces/regionalizer-service.interface';
import { bffWebInstance } from '../../data-sources/bbf-web-instance';

const regionalizerService: RegionalizerService = {
  getRegions: () => bffWebInstance.get('/cms/group/Shipping/regionComunas'),
};

export default regionalizerService;

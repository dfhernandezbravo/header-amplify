import cmsInstance from '@data-sources/cms-instance';
import FooterService from '@interfaces/footer-service.interface';

const footerService: FooterService = {
  getFooterData: () => cmsInstance.get('footer-headless'),
};

export default footerService;

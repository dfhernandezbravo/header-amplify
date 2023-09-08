import { bffWebInstance } from '@data-sources/bbf-web-instance';
import FooterService from '@interfaces/footer-service.interface';

const footerService: FooterService = {
  getFooterData: () => bffWebInstance.get('cms/group/footer-headless'),
};

export default footerService;

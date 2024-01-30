import footerService from '@services/footer';

const getFooterData = async () => {
  try {
    const { data } = await footerService.getFooterData();
    return data.params;
  } catch (error) {
    return null;
  }
};

export default getFooterData;

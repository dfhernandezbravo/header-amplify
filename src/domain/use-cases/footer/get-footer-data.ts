import footerService from '@services/footer';

const getFooterData = async () => {
  try {
    const { data } = await footerService.getFooterData();
    return data.params;
  } catch (error) {
    console.error(error);
  }
};

export default getFooterData;

import categoryService from '@services/category';

const getCategories = async () => {
  try {
    const { data } = await categoryService.getCategories();
    return data;
  } catch (error) {
    throw new Error('Error');
  }
};

export default getCategories;

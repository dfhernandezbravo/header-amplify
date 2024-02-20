import categoryService from '@services/category';

const getCategories = async () => {
  try {
    const vtxorderform = localStorage.getItem('vtxorderform');
    if (vtxorderform) return [];
    const { data } = await categoryService.getCategories();
    return data;
  } catch (error) {
    throw new Error('Error');
  }
};

export default getCategories;

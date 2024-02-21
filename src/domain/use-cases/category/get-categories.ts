import categoryService from '@services/category';

const getCategories = async () => {
  try {
    const env = process.env.NEXT_PUBLIC_ENV;
    const vtxorderform = localStorage.getItem('vtxorderform');
    if (vtxorderform && env === 'PRODUCTION') return [];
    const { data } = await categoryService.getCategories();
    return data;
  } catch (error) {
    throw new Error('Error');
  }
};

export default getCategories;

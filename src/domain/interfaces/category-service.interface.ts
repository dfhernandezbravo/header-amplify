import { GetCategoriesResponse } from '@entities/category/categories.response';
import { AxiosResponse } from 'axios';

interface CategoryService {
  getCategories(): Promise<AxiosResponse<GetCategoriesResponse>>;
}

export default CategoryService;

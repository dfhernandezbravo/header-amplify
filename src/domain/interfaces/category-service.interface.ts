import { Category } from '@entities/category/category.entity';
import { AxiosResponse } from 'axios';

interface CategoryService {
  getCategories(): Promise<AxiosResponse< Category[]>>;
}

export default CategoryService;

import { bffWebInstance } from '@data-sources/bbf-web-instance';
import { Category } from '@entities/category/category.entity';
import CategoryService from '@interfaces/category-service.interface';

const categoryService: CategoryService = {
  getCategories() {
    return bffWebInstance.get<Category[]>('/categories');
  },
};

export default categoryService;

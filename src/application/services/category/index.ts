import { GetCategoriesResponse } from '@entities/category/categories.response';
import CategoryService from '@interfaces/category-service.interface';
import axios from 'axios';

const categoryService: CategoryService = {
  getCategories() {
    return axios.get<GetCategoriesResponse>('/api/categories');
  },
};

export default categoryService;

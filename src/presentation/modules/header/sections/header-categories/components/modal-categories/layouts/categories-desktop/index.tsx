import Desktop from '@components/layout/desktop';
import { Category } from '@entities/category/category.entity';
import { useAppDispatch } from '@hooks/storeHooks';
import useCategoriesAnalytics from '@modules/header/sections/header-categories/analytics/categories-analytics';
import { closeCategories } from '@store/category/slices/category-slice';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CategoryDetailItem from '../../components/category-detail-item-desktop';
import CategoryItem from '../../components/category-item';
import {
  CategoriesDesktopContainer,
  CategoriesDetailContainer,
  CategoriesDetailGrid,
  CategoriesDetailTitle,
  CategoriesDetailTitleLink,
  CategoriesItemsContainer,
} from './styles';

interface Props {
  categories: Category[];
}

const CategoriesDesktop = ({ categories }: Props) => {
  const router = useRouter();
  const [category, setCategory] = useState<Category | null>(null);
  const { eventOnClickCategory, eventOnClickShowAll } =
    useCategoriesAnalytics();
  const dispatch = useAppDispatch();

  const handleHover = (categorySelected: Category) => {
    setCategory(categorySelected);
  };

  const handleClick = (categorySelected: Category) => {
    eventOnClickCategory(categorySelected.name);
    dispatch(closeCategories());
    router.push(`/${categorySelected.subname}`);
  };

  const handleOnClickShowAll = (category: Category) =>
    eventOnClickShowAll(category.name);

  return (
    <Desktop>
      <CategoriesDesktopContainer>
        <CategoriesItemsContainer>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              onHover={handleHover}
              onClick={handleClick}
              category={category}
            />
          ))}
        </CategoriesItemsContainer>

        {category && (
          <CategoriesDetailContainer>
            <CategoriesDetailTitle>
              <h2>{category.name}</h2>

              <CategoriesDetailTitleLink
                href={category.url}
                onClick={() => handleOnClickShowAll(category)}
              >
                Mostrar todo
              </CategoriesDetailTitleLink>
            </CategoriesDetailTitle>

            <CategoriesDetailGrid>
              {category.children.map((item) => (
                <CategoryDetailItem category={item} key={item.id} />
              ))}
            </CategoriesDetailGrid>
          </CategoriesDetailContainer>
        )}
      </CategoriesDesktopContainer>
    </Desktop>
  );
};

export default CategoriesDesktop;

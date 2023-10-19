import Desktop from '@components/layout/desktop';
import { Category } from '@entities/category/category.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { openCategories } from '@store/category/slices/category-slice';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CategoryDetailItem from '../../components/category-detail-item-desktop';
import CategoryItem from '../../components/category-item';
import useAnalyticsCategoriesDesktop from './analytics';
import {
  CategoriesDesktopContainer,
  CategoriesDetailContainer,
  CategoriesDetailGrid,
  CategoriesDetailTitle,
  CategoriesDetailTitleLink,
  CategoriesItemsContainer,
} from './styles';

const CategoriesDesktop = () => {
  const { categories, isOpenCategories } = useAppSelector(
    (state) => state.category,
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<Category | null>(null);
  const { analyticsOnClickCategory, analyticsShowAll } =
    useAnalyticsCategoriesDesktop();

  const handleHover = (categorySelected: Category) => {
    setCategory(categorySelected);
  };

  const handleClick = (categorySelected: Category) => {
    analyticsOnClickCategory(categorySelected.name);
    dispatch(openCategories(!isOpenCategories));
    router.push(`/${categorySelected.subname}`);
  };

  const handleOnClickShowAll = (category: Category) =>
    analyticsShowAll(category.name);

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

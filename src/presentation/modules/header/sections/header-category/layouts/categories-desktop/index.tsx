import Desktop from '@components/layout/desktop';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
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
import useAnalytics from '@hooks/useAnalytics';
import { openCategories } from '@store/category/slices/category-slice';

const CategoriesDesktop = () => {
  const { categories, isOpenCategories } = useAppSelector((state) => state.category); 
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<Category | null>(null);
  const { sendEventAnalytics } = useAnalytics();

  const handleHover = (categorySelected: Category) => {
    setCategory(categorySelected);
  };

  const handleClick = (categorySelected: Category) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N1',
      tag: categorySelected.name,
    });
    dispatch(openCategories(!isOpenCategories));
    router.push(`/${categorySelected.subname}`);
  };

  const handleOnClickShowAll = (category: Category) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click mostrar todo menu',
      tag: category.name,
    });
  };

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

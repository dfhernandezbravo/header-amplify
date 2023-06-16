import Desktop from '@components/layout/desktop';
import { useAppSelector } from '@hooks/storeHooks';
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

const CategoriesDesktop = () => {
  const { categories } = useAppSelector((state) => state.category);
  const router = useRouter();
  const [category, setCategory] = useState<Category | null>(null);

  const handleHover = (categorySelected: Category) => {
    setCategory(categorySelected);
  };

  const handleClick = (categorySelected: Category) => {
    router.push(categorySelected.url);
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

              <CategoriesDetailTitleLink href={category.url}>
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

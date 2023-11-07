import Desktop from '@components/layout/desktop';
import { Category } from '@entities/category/category.entity';
import useCategoriesAnalytics from '@modules/header/sections/header-categories/analytics/categories-analytics';
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
  const {
    eventOnClickCategoryN1,
    eventOnClickShowAll,
    eventOnClickCategoryN2,
    eventOnClickCategoryN3,
  } = useCategoriesAnalytics();

  const handleHover = (categorySelected: Category) => {
    setCategory(categorySelected);
  };

  const handleClickN1 = (category: Category) => {
    if (router.asPath === `/${category.subname}`) return;

    eventOnClickCategoryN1(category.name);
    router.push(category.subname);
  };

  const handleClickN2 = (category: Category) => {
    if (router.asPath === `/${category.subname}`) return;

    eventOnClickCategoryN2(category.name);
    router.push(category.subname);
  };

  const handleClickN3 = (category: Category) => {
    if (router.asPath === `/${category.subname}`) return;

    eventOnClickCategoryN3(category.name);
    router.push(category.subname);
  };

  const handleOnClickShowAll = (category: Category) => {
    if (router.asPath === `/${category.subname}`) return;

    eventOnClickShowAll(category.name);
    router.push(category.subname);
  };

  return (
    <Desktop>
      <CategoriesDesktopContainer>
        <CategoriesItemsContainer>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              onHover={handleHover}
              onClick={handleClickN1}
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
                <CategoryDetailItem
                  category={item}
                  key={item.id}
                  onClickN2={handleClickN2}
                  onClickN3={handleClickN3}
                />
              ))}
            </CategoriesDetailGrid>
          </CategoriesDetailContainer>
        )}
      </CategoriesDesktopContainer>
    </Desktop>
  );
};

export default CategoriesDesktop;

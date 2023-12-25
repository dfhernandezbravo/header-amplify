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
import { closeCategories } from '@store/category/slices/category-slice';
import { useAppDispatch } from '@hooks/storeHooks';

interface Props {
  categories: Category[];
}

const CategoriesDesktop = ({ categories }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
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
  const closeModal = () => dispatch(closeCategories());

  const handleClickN1 = (category: Category) => {
    if (router.asPath === `/${category.url}`) return;

    eventOnClickCategoryN1(category.name);
    closeModal();
    router.push('/' + category.url);
  };

  const handleClickN2 = (category: Category) => {
    if (router.asPath === `/${category.url}`) return;

    eventOnClickCategoryN2(category.name);
    closeModal();
    router.push('/' + category.url);
  };

  const handleClickN3 = (category: Category) => {
    if (router.asPath === `/${category.url}`) return;

    eventOnClickCategoryN3(category.name);
    closeModal();
    router.push('/' + category.url);
  };

  const handleOnClickShowAll = (category: Category) => {
    if (router.asPath === `/${category.url}`) return;

    eventOnClickShowAll(category.name);
    closeModal();
    router.push('/' + category.url);
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
              <h2>{category?.name}</h2>

              <CategoriesDetailTitleLink
                href={category?.url}
                onClick={() => handleOnClickShowAll(category)}
              >
                Mostrar todo
              </CategoriesDetailTitleLink>
            </CategoriesDetailTitle>

            <CategoriesDetailGrid>
              {category?.categories.map((item) => (
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

import Mobile from '@components/layout/mobile';
import { useAppSelector } from '@hooks/storeHooks';
import React, { useState } from 'react';
import CategoryItem from '../../components/category-item';
import { CategoriesMobileContainer, CategoriesMobileList } from './styles';
import CategoryDetailItemMobile from '../../components/category-detail-item-mobile';

const CategoriesMobile = () => {
  const { categories } = useAppSelector((state) => state.category);
  const [category, setCategory] = useState<Category | null>(null);

  return (
    <Mobile>
      <CategoriesMobileContainer>
        {!category ? (
          <CategoriesMobileList>
            <h2>Categorías</h2>
            {categories.map((item) => (
              <CategoryItem
                key={item.id}
                category={item}
                onClick={(category) => {
                  setCategory(category);
                }}
              />
            ))}
          </CategoriesMobileList>
        ) : (
          <CategoryDetailItemMobile
            category={category}
            onBack={() => setCategory(null)}
          />
        )}
      </CategoriesMobileContainer>
    </Mobile>
  );
};

export default CategoriesMobile;

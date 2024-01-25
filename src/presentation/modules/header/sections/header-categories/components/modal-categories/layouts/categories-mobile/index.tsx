import Mobile from '@components/layout/mobile';
import { Category } from '@entities/category/category.entity';
import { useState } from 'react';
import CategoryDetailItemMobile from '../../components/category-detail-item-mobile';
import CategoryItem from '../../components/category-item';
import {
  CategoriesMobileContainer,
  CategoriesMobileList,
  CategoriesMobileTitle,
} from './styles';
import UserMenu from './components/user-menu';

interface Props {
  categories: Category[];
}

const CategoriesMobile = ({ categories }: Props) => {
  const [category, setCategory] = useState<Category | null>(null);

  return (
    <Mobile>
      <CategoriesMobileContainer>
        {!category ? (
          <>
            <UserMenu />
            <CategoriesMobileList>
              <CategoriesMobileTitle>Categorías</CategoriesMobileTitle>
              {categories?.map((item, i) => (
                <CategoryItem
                  key={`${item.id}-${i}}`}
                  category={item}
                  onClick={(category) => {
                    setCategory(category);
                  }}
                  categorySelected={category}
                />
              ))}
            </CategoriesMobileList>
          </>
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

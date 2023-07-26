import ButtonBack from '@components/atoms/button-back';
import React from 'react';
import CategoryAccordion from '../category-accordion';
import {
  CategoriesDetailTitleMobileLink,
  CategoryContent,
  CategoryHeader,
  CategoryHeaderTitle,
  CategoryLink,
  CategoryLinkAll,
  ChildrenAccordionCategory,
} from './styles';

interface Props {
  category: Category;
  onBack: () => void;
}

const CategoryDetailItemMobile = ({ category, onBack }: Props) => {
  return (
    <div>
      <CategoryHeader>
        <CategoryHeaderTitle>
          <ButtonBack onClick={onBack} />

          <h3>{category.name}</h3>
        </CategoryHeaderTitle>
        <CategoriesDetailTitleMobileLink href={category.url}>
          Mostrar Todo
        </CategoriesDetailTitleMobileLink>
      </CategoryHeader>

      {category.children.map((item) => (
        <CategoryContent key={item.id}>
          <CategoryAccordion title={item.name}>
            <ChildrenAccordionCategory>
              {item.children.map((sub) => (
                <CategoryLink key={sub.id} href={sub.url}>
                  {sub.name}
                </CategoryLink>
              ))}

              <CategoryLinkAll href={item.url}>Mostrar todo </CategoryLinkAll>
            </ChildrenAccordionCategory>
          </CategoryAccordion>
        </CategoryContent>
      ))}
    </div>
  );
};

export default CategoryDetailItemMobile;

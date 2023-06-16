import React from 'react';
import {
  CategoryDetailItemContainer,
  CategoryDetailItemLink,
  CategoryDetailItemLinkAll,
  CategoryDetailItemTitle,
} from './styles';

interface Props {
  category: Category;
}

const CategoryDetailItem = ({ category }: Props) => {
  const { name, children, url } = category;

  return (
    <CategoryDetailItemContainer>
      <CategoryDetailItemTitle href={url}>{name}</CategoryDetailItemTitle>

      {children.map((item) => (
        <CategoryDetailItemLink href={item.url} key={item.id}>
          {item.name}
        </CategoryDetailItemLink>
      ))}

      <CategoryDetailItemLinkAll href={url}>
        Mostrar todo
      </CategoryDetailItemLinkAll>
    </CategoryDetailItemContainer>
  );
};

export default CategoryDetailItem;

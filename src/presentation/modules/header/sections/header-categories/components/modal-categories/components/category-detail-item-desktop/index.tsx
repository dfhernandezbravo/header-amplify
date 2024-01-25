/* eslint-disable camelcase */
import { Category } from '@entities/category/category.entity';
import {
  CategoryDetailItemContainer,
  CategoryDetailItemLink,
  CategoryDetailItemLinkAll,
  CategoryDetailItemTitle,
  CategoryDetailTitleContainer,
} from './styles';

interface Props {
  category: Category;
  onClickN2: (category: Category) => void;
  onClickN3: (category: Category) => void;
}

const CategoryDetailItem = ({ category, onClickN2, onClickN3 }: Props) => {
  const { name, sub_categories, url } = category;

  return (
    <CategoryDetailItemContainer>
      <CategoryDetailTitleContainer>
        <CategoryDetailItemTitle href="" onClick={() => onClickN2(category)}>
          {name}
        </CategoryDetailItemTitle>
        <CategoryDetailItemLinkAll href={url}>
          Mostrar todo
        </CategoryDetailItemLinkAll>
      </CategoryDetailTitleContainer>
      {sub_categories &&
        sub_categories.map((item) => (
          <CategoryDetailItemLink
            href={item.url}
            key={item.id}
            onClick={() => onClickN3(item)}
          >
            {item.name}
          </CategoryDetailItemLink>
        ))}
    </CategoryDetailItemContainer>
  );
};

export default CategoryDetailItem;

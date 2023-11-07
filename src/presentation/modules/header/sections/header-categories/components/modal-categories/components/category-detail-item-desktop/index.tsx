import { Category } from '@entities/category/category.entity';
import {
  CategoryDetailItemContainer,
  CategoryDetailItemLink,
  CategoryDetailItemLinkAll,
  CategoryDetailItemTitle,
} from './styles';

interface Props {
  category: Category;
  onClickN2: (category: Category) => void;
  onClickN3: (category: Category) => void;
}

const CategoryDetailItem = ({ category, onClickN2, onClickN3 }: Props) => {
  const { name, children, subname } = category;

  return (
    <CategoryDetailItemContainer>
      <CategoryDetailItemTitle href="" onClick={() => onClickN2(category)}>
        {name}
      </CategoryDetailItemTitle>

      {children.map((item) => (
        <CategoryDetailItemLink
          href={item.url}
          key={item.id}
          onClick={() => onClickN3(item)}
        >
          {item.name}
        </CategoryDetailItemLink>
      ))}

      <CategoryDetailItemLinkAll href={subname}>
        Mostrar todo
      </CategoryDetailItemLinkAll>
    </CategoryDetailItemContainer>
  );
};

export default CategoryDetailItem;

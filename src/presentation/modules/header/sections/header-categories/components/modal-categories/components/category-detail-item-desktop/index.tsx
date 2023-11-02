import { Category } from '@entities/category/category.entity';
import useAnalyticsCategoryDetail from './analytics';
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
  const { analyticsOnClickSubcategory, analyticsOnClickTitle } =
    useAnalyticsCategoryDetail();

  const handleOnClickTitle = () => {
    analyticsOnClickTitle(category.name);
  };

  const handleOnClickSubcategory = (subcategory: Category) => {
    analyticsOnClickSubcategory(subcategory.name);
  };

  return (
    <CategoryDetailItemContainer>
      <CategoryDetailItemTitle href={url} onClick={handleOnClickTitle}>
        {name}
      </CategoryDetailItemTitle>

      {children.map((item) => (
        <CategoryDetailItemLink
          href={item.url}
          key={item.id}
          onClick={() => handleOnClickSubcategory(item)}
        >
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

import { Category } from '@entities/category/category.entity';
import useAnalytics from '@hooks/useAnalytics';
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
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClickTitle = () => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N2',
      tag: category.name,
    });
  };

  const handleOnClickSubcategory = (subcategory: Category) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N3',
      tag: subcategory.name,
    });
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

import CategoryIcon from '@components/atoms/icon-category';
import { Category } from '@entities/category/category.entity';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CategoryItemContainer, CategoryTitle } from './styles';

interface Props {
  category: Category;
  categorySelected: Category | null;
  onHover?: (category: Category) => void;
  onClick?: (category: Category) => void;
}

const CategoryItem = ({
  category,
  onClick = () => {},
  onHover = () => {},
  categorySelected,
}: Props) => {
  return (
    <CategoryItemContainer
      onClick={(e) => {
        e.stopPropagation();
        onClick(category);
      }}
      onMouseOver={(e) => {
        e.preventDefault();
        onHover(category);
      }}
    >
      <CategoryIcon icon={category?.icon} />
      <CategoryTitle>{category.name}</CategoryTitle>
      {category.name === categorySelected?.name && (
        <MdOutlineKeyboardArrowRight size={20} color="#AF1212" />
      )}
    </CategoryItemContainer>
  );
};

export default CategoryItem;

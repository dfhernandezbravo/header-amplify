import CategoryIcon from '@components/atoms/icon-category';
import { Category } from '@entities/category/category.entity';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CategoryItemContainer, CategoryTitle } from './styles';

interface Props {
  category: Category;
  onHover?: (category: Category) => void;
  onClick?: (category: Category) => void;
}

const CategoryItem = ({
  category,
  onClick = () => {},
  onHover = () => {},
}: Props) => {
  return (
    <CategoryItemContainer
      onClick={() => onClick(category)}
      onMouseOver={(e) => {
        e.preventDefault();
        onHover(category);
      }}
    >
      <CategoryIcon subname={category.subname} />
      <CategoryTitle>{category.name}</CategoryTitle>

      <MdOutlineKeyboardArrowRight size={20} />
    </CategoryItemContainer>
  );
};

export default CategoryItem;

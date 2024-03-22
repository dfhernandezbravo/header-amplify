/* eslint-disable camelcase */
import { Category } from '@entities/category/category.entity';
import { useAppDispatch } from '@hooks/storeHooks';
import { closeCategories } from '@store/category/slices/category-slice';
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
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(closeCategories());
  };

  return (
    <CategoryDetailItemContainer>
      <CategoryDetailTitleContainer>
        <CategoryDetailItemTitle
          data-id={`sub-category-${name.toLowerCase().replace(' ', '-')}`}
          href={`/${category.url}`}
          onClick={() => {
            closeModal();
            onClickN2(category);
          }}
        >
          {name}
        </CategoryDetailItemTitle>
        <CategoryDetailItemLinkAll onClick={closeModal} href={`/${url}`}>
          Mostrar todo
        </CategoryDetailItemLinkAll>
      </CategoryDetailTitleContainer>

      {sub_categories &&
        sub_categories.map((item) => (
          <CategoryDetailItemLink
            href={`/${item.url}`}
            key={item.id}
            onClick={() => {
              closeModal();
              onClickN3(item);
            }}
          >
            {item.name}
          </CategoryDetailItemLink>
        ))}
    </CategoryDetailItemContainer>
  );
};

export default CategoryDetailItem;

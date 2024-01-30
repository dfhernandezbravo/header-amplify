import ButtonBack from '@components/atoms/button-back';
import { Category } from '@entities/category/category.entity';
import CategoryAccordion from '../category-accordion';
import {
  CategoriesDetailTitleMobileLink,
  CategoryContent,
  CategoryHeader,
  CategoryHeaderTitle,
  CategoryLink,
  CategoryLinkAll,
  ChildrenAccordionCategory,
  CategoryDetailItemContainer,
} from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { closeCategories } from '@store/category/slices/category-slice';

interface Props {
  category: Category;
  onBack: () => void;
}

const CategoryDetailItemMobile = ({ category, onBack }: Props) => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(closeCategories());
  };

  return (
    <CategoryDetailItemContainer>
      <ButtonBack onClick={onBack} />
      <CategoryHeader>
        <CategoryHeaderTitle>{category.name}</CategoryHeaderTitle>
        <CategoriesDetailTitleMobileLink
          onClick={closeModal}
          href={category.url}
        >
          Mostrar Todo
        </CategoriesDetailTitleMobileLink>
      </CategoryHeader>

      {category?.categories.map((item) => (
        <CategoryContent key={item.id}>
          <CategoryAccordion title={item.name}>
            <ChildrenAccordionCategory>
              {item?.sub_categories?.length > 0 &&
                item.sub_categories.map((sub) => (
                  <CategoryLink
                    key={sub.id}
                    href={sub.url}
                    onClick={closeModal}
                  >
                    {sub.name}
                  </CategoryLink>
                ))}

              <CategoryLinkAll href={item.url} onClick={closeModal}>
                Mostrar todo{' '}
              </CategoryLinkAll>
            </ChildrenAccordionCategory>
          </CategoryAccordion>
        </CategoryContent>
      ))}
    </CategoryDetailItemContainer>
  );
};

export default CategoryDetailItemMobile;

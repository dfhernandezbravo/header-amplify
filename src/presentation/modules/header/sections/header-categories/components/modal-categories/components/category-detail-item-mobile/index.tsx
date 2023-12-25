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

      {category?.categories.map((item) => (
        <CategoryContent key={item.id}>
          <CategoryAccordion title={item.name}>
            <ChildrenAccordionCategory>
              {item?.sub_categories?.length > 0 &&
                item.sub_categories.map((sub) => (
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

export type Category = {
  id: string;
  name: string;
  hasChildren: boolean;
  url: string;
  subname: string;
  icon: string;
  sub_categories: Category[];
  categories: Category[];
};

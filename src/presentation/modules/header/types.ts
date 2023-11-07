export type Modules = {
  logo: boolean;
  location: boolean;
  categories: boolean;
  search: boolean;
  login: boolean;
  cart: boolean;
  topBrands: boolean;
  footerHeader: boolean;
};

export interface HeaderProps {
  modules: Modules;
  cartId: string;
}

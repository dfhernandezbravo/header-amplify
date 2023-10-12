export type Search = {
  value: string;
  quantity: number;
};

export type CategoriesSearch = {
  key: string;
  value: string;
  labelValue: string;
};

export type ProductImage = {
  imageUrl: string;
  imageTag: string;
  imageLabel: string;
};

export type ProductCommertialOffer = {
  Price: number;
  ListPrice: number;
};

export type ProductSeller = {
  commertialOffer: ProductCommertialOffer;
};

export type ProductItems = {
  name: string;
  images: ProductImage[];
  sellers: ProductSeller[];
};

export type Product = {
  productId: string;
  productName: string;
  brand: string;
  description: string;
  items: ProductItems[];
  link: string;
};

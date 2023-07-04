type Search = {
  value: string;
  quantity: number;
};

type CategoriesSearch = {
  key: string;
  value: string;
  labelValue: string;
};

type ProductImage = {
  imageUrl: string;
  imageTag: string;
  imageLabel: string;
};

type ProductCommertialOffer = {
  Price: number;
  ListPrice: number;
};

type ProductSeller = {
  commertialOffer: ProductCommertialOffer;
};

type ProductItems = {
  name: string;
  images: ProductImage[];
  sellers: ProductSeller[];
};

type Product = {
  productId: string;
  productName: string;
  brand: string;
  description: string;
  items: ProductItems[];
  link: string;
};

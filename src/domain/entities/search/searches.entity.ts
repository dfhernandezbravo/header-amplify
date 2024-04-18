import {
  AdjustmentType,
  PriceType,
} from '@ccom-easy-design-system/atoms.price/dist/types';

export type Search = {
  value: string;
  quantity: number;
};

export type ItemSearch = {
  query: string;
  value: string;
  filter: string;
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

export type ProductVariant = {
  id: string;
  specifications: {
    name: string;
    values: string[];
  }[];
  images: ProductImage[];
};

export type Product = {
  productId: string;
  productName: string;
  brand: string;
  linkText: string;
  availableQuantity: number;
  variants: ProductVariant[];
  prices: PriceType;
  pricesM2: PriceType;
  adjustments: AdjustmentType[];
};

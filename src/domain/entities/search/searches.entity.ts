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

export type Adjustments = {
  id: string;
  priceType: string;
  name: string;
  percentDiscount: string;
  value: number;
};

export type Prices = {
  normalPrice: number;
  offerPrice: number;
  brandPrice: number;
  currency: string;
};

export type Product = {
  productId: string;
  productName: string;
  brand: string;
  linkText: string;
  availableQuantity: number;
  variants: ProductVariant[];
  prices: Prices;
  adjustments: Adjustments[];
};

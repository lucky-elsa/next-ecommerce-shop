import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ProductApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  longDescription: string;
}

export interface Product {
  slug: string;
  title: string;
  thumbnail: { url: string };
}

export interface GetProductListResponse {
  products: Product[];
}

export interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

export interface CartState {
  readonly items: readonly CartItem[] | undefined;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: CartItem["id"]) => void;
}

export type MarkdownResult = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, string>
>;

export interface ProductDetails {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: MarkdownResult;
}

export interface ProductProps {
  data: ProductDetails;
}

export type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

export interface ProductListItemProps {
  data: ProductListItem;
}

export type CheckoutFormTypes = {
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: number;
  expiryDate: string;
  CVVNumber: number;
};

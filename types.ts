import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { FieldValues } from "react-hook-form";

export interface ProductApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  longDescription: string;
}

export interface Product {
  slug: string;
  title: string;
  thumbnail: { url: string };
  price: number;
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
  readonly items: /*readonly*/ CartItem[] | undefined;
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
  price: number;
  longDescription: MarkdownResult;
}

export interface ProductProps {
  data: ProductDetails;
}

export type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt" | "price"
>;

export interface ProductListItemProps {
  data: ProductListItem;
}

export interface FormTypes<T> extends FieldValues {
  [x: string]: T;
}
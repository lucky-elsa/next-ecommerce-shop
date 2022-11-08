/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query GetProductDetailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    slug\n    title\n    description\n    longDescription\n    price\n    thumbnail {\n      url\n    }\n  }\n}": types.GetProductDetailsBySlugDocument,
    "query GetProductsList {\n  products {\n    slug\n    title\n    thumbnail {\n      url\n    }\n  }\n}": types.GetProductsListDocument,
    "query GetProductsSlugs {\n  products {\n    slug\n  }\n}": types.GetProductsSlugsDocument,
};

export function graphql(source: "query GetProductDetailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    slug\n    title\n    description\n    longDescription\n    price\n    thumbnail {\n      url\n    }\n  }\n}"): (typeof documents)["query GetProductDetailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    slug\n    title\n    description\n    longDescription\n    price\n    thumbnail {\n      url\n    }\n  }\n}"];
export function graphql(source: "query GetProductsList {\n  products {\n    slug\n    title\n    thumbnail {\n      url\n    }\n  }\n}"): (typeof documents)["query GetProductsList {\n  products {\n    slug\n    title\n    thumbnail {\n      url\n    }\n  }\n}"];
export function graphql(source: "query GetProductsSlugs {\n  products {\n    slug\n  }\n}"): (typeof documents)["query GetProductsSlugs {\n  products {\n    slug\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
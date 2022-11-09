import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "@/components/Product";
import { GetProductListResponse } from "types";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { apolloClient } from "services/graphql/apolloClient";
import { gql } from "@apollo/client";
import { GetProductDetailsBySlugDocument, GetProductDetailsBySlugQuery, GetProductsSlugsDocument, GetProductsSlugsQuery } from "generated/graphql";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <Link href="/products">
        <a>Return to all products</a>
      </Link>
      <ProductDetails
        data={{
          id: data.slug,
          title: data.title,
          thumbnailUrl: data.thumbnail.url,
          thumbnailAlt: data.title,
          description: data.description ?? "",
          rating: data.price,
          longDescription: data.longDescription,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  interface Product {
    slug: string;
  }

  return {
    paths: data.products.map((product: Product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<GetProductDetailsBySlugQuery>({
    variables: {
      slug: params.productId,
    },
    query: GetProductDetailsBySlugDocument
  });

  if (!data.product || !data.product.longDescription) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.longDescription),
      },
    },
  };
};

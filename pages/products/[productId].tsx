import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "../../components/Product";
import { StoreApiResponse } from "../../types";
import Link from "next/link";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <Link href="/products"><a>Return to all products</a></Link>
    <ProductDetails
      data={{
        id: data.id,
        title: data.title,
        thumbnailUrl: data.image,
        thumbnailAlt: data.title,
        description: data.description,
        rating: data.rating.rate,
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
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map(product => {
      return {
        params: {
          productId: product.id.toString(),
        }
      };
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

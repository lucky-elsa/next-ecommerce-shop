import { InferGetStaticPropsType } from "next";
import { StoreApiResponse } from "../types";
import { Product } from "../components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((product) => {
        return <li key={product.id} className="shadow-xl border-2">
            <Product data={{
                title: product.title,
                description: product.description,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
                rating: product.rating.rate
            }}/>
        </li>;
      })}
    </ul>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;

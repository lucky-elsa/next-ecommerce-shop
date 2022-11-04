import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ProductApiResponse } from "types";
import { ProductListItem } from "@/components/Product";
import { fetchProducts } from "services/api/fetchProducts";
import { countProducts } from "services/api/countProducts";
import { useRouter } from "next/router";

const pages = Array.from({ length: 10 }, (_, i) => i + 1);

const PaginationTask2 = ({
  data,
  productsCount,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!data) {
    return <div>Something went wrong...</div>;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="font-bold">{productsCount && productsCount}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100 my-10">
        {data?.map((product: ProductApiResponse) => (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
              }}
            ></ProductListItem>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="hidden md:-mt-px md:flex w-full justify-center">
          {pages?.map((item, index) => (
            <Link key={index} href={`/pagination/${index + 1}`}>
              <a
                className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium active:text-indigo-600 active:border-indigo-500 ${
                  router.asPath === `/pagination/${index + 1}`
                    ? "border-indigo-500 text-indigo-600"
                    : "text-gray-500"
                }`}
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginationTask2;

export const getStaticPaths = () => {
  return {
    paths: pages.map((page) => {
      return {
        params: {
          pageId: page.toString(),
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params?.pageId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const take = 25;
  const offset = (Number(params.pageId) - 1) * take;
  const data = await fetchProducts(take, offset);
  const productsCount = await countProducts();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data,
      productsCount,
    },
  };
};

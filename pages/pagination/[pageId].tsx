import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ProductListItem } from "@/components/Product";
import { useRouter } from "next/router";

interface ProductApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
}

const pages = Array.from({ length: 10 }, (_, i) => i + 1);

const PaginationTask2 = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();

  if (!data) {
    return <div>Something went wrong...</div>;
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
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

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: ProductApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          pageId: product.id.toString(),
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
  const offset = (Number(params.pageId) - 1) * 25;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/?take=25&offset=${offset}`
  );
  const data: ProductApiResponse[] | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

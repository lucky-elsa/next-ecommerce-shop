import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductListItem } from "@/components/Product";

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

const PaginationTask1 = () => {
  const [page, setPage] = useState(1);
  console.log(page);

  const fetchProducts = async (page: number) => {
    const offset = (page - 1) * 25;
    const result = await fetch(
      `https://naszsklep-api.vercel.app/api/products/?take=25&offset=${offset}`);
    const json = result.json();
    return json;
  };

  const { isLoading, isError, data} = useQuery(
    ["products", page],
    () => fetchProducts(page),
    { keepPreviousData: true }
  );

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const renderList = (
    data: ProductApiResponse[],
    isError: boolean,
    isLoading: boolean
  ) => {
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100 my-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Something went wrong...</div>
        ) : (
          data?.map((product: ProductApiResponse) => (
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
          ))
        )}
      </ul>
    );
  };

  return (
    <div>
      {renderList(data, isError, isLoading)}
      <div className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="hidden md:-mt-px md:flex w-full justify-center">
          {pages?.map((item, index) => <button
            key={index}
            className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium focus:text-indigo-600 focus:border-indigo-500 ${
              page === index + 1
                ? "border-indigo-500 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => setPage(index + 1)}
          >
            {item}
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default PaginationTask1;

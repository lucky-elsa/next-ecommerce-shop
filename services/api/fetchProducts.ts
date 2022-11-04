import { ProductApiResponse } from "../../types";

export const fetchProducts = async (take: number, offset: number) => {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products/?take=${take}&offset=${offset}`
    );
    const data: ProductApiResponse[] | null = await res.json();
    return data;
  };
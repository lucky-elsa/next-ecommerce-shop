import { fetchProducts } from "./fetchProducts";
  
export const countProducts = async (count = 0): Promise<number | undefined> => {
    const productsPerFetch = 500;
  
    const products = await fetchProducts(productsPerFetch, count);

    if (!products) return;
  
    const newCount = count + products.length;
  
    if (products.length === productsPerFetch) {
      return countProducts(newCount);
    } else {
      return newCount;
    }
  };
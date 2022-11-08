import { CartItem } from "types";

export const getCartItemsFromLocalStorage = () => {
    const itemsFromLocalStorage = localStorage.getItem("SHOPPY_SHOPPING_CART");
    if (!itemsFromLocalStorage) {
        return [];
    }
    try {
      const items = JSON.parse(itemsFromLocalStorage);
      return items;
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  
  export const setCartItemsInLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("SHOPPY_SHOPPING_CART", JSON.stringify(cartItems));
  };
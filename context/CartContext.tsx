import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { CartState, CartItem } from "types";
import {
  getCartItemsFromLocalStorage,
  setCartItemsInLocalStorage,
} from "services/store/cartStore";

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

  useEffect(() => {
    setCartItems(getCartItemsFromLocalStorage());
  }, []);

  useEffect(() => {
    if (!cartItems) return;
    setCartItemsInLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => {
            if (!prevState) return;
            const existingItem = prevState.find(
              (existingItem) => existingItem.id === item.id
            );
            if (!existingItem) {
              return [...prevState, item];
            }

            return prevState.map((existingItem) => {
              if (existingItem.id === item.id) {
                return {
                  ...existingItem,
                  count: existingItem.count + 1,
                };
              }
              return existingItem;
            });
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((prevState) => {
            if (!prevState) return;
            const existingItem = prevState.find((item) => item.id === id);
            if (existingItem && existingItem.count === 1) {
              return prevState.filter((item) => item.id !== id);
            }
            return prevState.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  count: item.count - 1,
                };
              }
              return item;
            });
          });
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error(`You forgot CartStateContextProvider`);
  }

  return cartState;
};

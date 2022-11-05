import { useCartState } from "context/CartContext";

const CartContent = () => {
  const cartState = useCartState();
  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {cartState && cartState?.items?.map((item, index) => (
          <li key={`${index}_${item.title}`} className="p-4">
            <div className="flex justify-between">
              <div>{item.title}</div>
              <div className="flex">
                <span>{item.price} x {item.count}</span>{" "}
                <button className="ml-4 bg-transparent text-color-primary text-xs font-semibold hover:text-color-secondary" onClick={() => {cartState.removeItemFromCart(item.id)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                    aria-label="Remove element"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CartSummary = () => {
  const cartState = useCartState();
  return (
    <div>
      Cart Summary
      <div>Items total: {cartState?.items?.length}</div>
    </div>
  );
};

const CartPage = () => {
  const cartState = useCartState();

  return (
    <div className="max-w-5xl mx-auto w-full p4">
      <div className="grid grid-cols-3 gap-8">
        <CartContent />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;

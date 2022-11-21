import { formatCurrency } from "@/utils/formatCurrency";

type PriceT = {
  price: number;
};

export const Rating = ({ price }: PriceT) => {
  return <div className="m-4">£{formatCurrency(price)}</div>;
};

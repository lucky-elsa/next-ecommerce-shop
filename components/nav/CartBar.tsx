import { useCartState } from "context/CartContext";
import Image from "next/image";
import Link from "next/link";

type CartBarProps = {
  href: string;
};

export const CartBar = ({ href }: CartBarProps) => {
  const cartState = useCartState();

  return (
    <Link href={href}>
      <a className="text-color-gray">
        <Image
          className="rounded-full hover:animate-bounce"
          src="/assets/icons/basket.svg"
          alt="Profile"
          width="30"
          height="30"
          layout="intrinsic"
        />
        <span>{cartState?.items?.length}</span>
      </a>
    </Link>
  );
};

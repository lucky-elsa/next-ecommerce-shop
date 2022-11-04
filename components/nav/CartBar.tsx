import Image from "next/image";
import Link from "next/link";

interface CartItem {
    price: number;
    title: string;
}

type CartBarProps = {
    href: string;
}

export const CartBar = ({href}: CartBarProps) => {


  return (
    <Link href={href}>
      <a>
        <Image
          className="rounded-full hover:animate-bounce"
          src="/assets/icons/basket.svg"
          alt="Profile"
          width="30"
          height="30"
          layout="intrinsic"
        />
      </a>
    </Link>
  );
};

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="max-w mx-auto w-full h-16 flex justify-center content-center">
      <nav className="max-w mx-auto w-full flex justify-between content-center gap-2 p-2 px-8 border-b border-gray-300">
        <Image
          src="/assets/common/logo-dark.svg"
          alt="Shoppy"
          width="150"
          height="50"
          layout="intrinsic"
        />
        <div className="flex justify-items-center items-center gap-10">
        <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="flex justify-items-center items-center gap-4">
        <button>
              <a>
                <Image
                  className="rounded-full hover:animate-bounce"
                  src="/assets/icons/basket.svg"
                  alt="Profile"
                  width="30"
                  height="30"
                />
              </a>
            </button>
          <Link href="">
            <button>
              <a>
                <Image
                  className="rounded-full hover:animate-bounce"
                  src="/assets/icons/heart.svg"
                  alt="Profile"
                  width="30"
                  height="30"
                />
              </a>
            </button>
          </Link>
          <Link href="">
            <button>
              <a>
                <Image
                  className="rounded-full"
                  src="/assets/common/avatar.png"
                  alt="Profile"
                  width="30"
                  height="30"
                />
              </a>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

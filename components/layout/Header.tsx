import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="max-w mx-auto w-full h-16 flex justify-center content-center bg-color-secondary">
      <nav className="max-w mx-auto w-full flex justify-between content-center gap-2 p-2 px-8 border-b border-gray-300">
        <Image
          src="/assets/common/logo-dark.svg"
          alt="Shoppy"
          width="150"
          height="50"
          layout="intrinsic"
        />
        <div className="flex justify-items-center items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={
                  router.asPath === link.href
                    ? "border-b-2 border-white"
                    : ""
                }
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex justify-items-center items-center gap-4">
        <Link href="">
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
          <Link href="">

              <a>
                <Image
                  className="rounded-full hover:animate-bounce"
                  src="/assets/icons/heart.svg"
                  alt="Profile"
                  width="30"
                  height="30"
                  layout="intrinsic"
                />
              </a>
          </Link>
          <Link href="">

              <a>
                <Image
                  className="rounded-full"
                  src="/assets/common/avatar.png"
                  alt="Profile"
                  width="30"
                  height="30"
                  layout="intrinsic"
                />
              </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

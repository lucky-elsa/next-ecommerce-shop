import { Rating as Price } from "./Price";
import { ProductProps, ProductListItemProps } from "types";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { checkIfExternalURL } from "@/utils/checkIfExternalURL";
import { useCartState } from "context/CartContext";
import { ProductReviewForm } from "./form/ProductReviewForm";

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <NextSeo
          title={data.title}
          description={data.description}
          canonical={`https://nextjs-ecommerce-shop-liard.vercel.app/${data.id}`}
          openGraph={{
            url: `https://nextjs-ecommerce-shop-liard.vercel.app/${data.id}`,
            title: data.title,
            description: data.description,
            images: [
              {
                url: data.thumbnailUrl,
                alt: data.thumbnailAlt,
                type: "image/jpeg",
              },
            ],
          }}
        />
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        <p className="p-4">{data.description}</p>
        <article className="p-4 prose lg:prose-xl">
          <MDXRemote
            components={{
              a: ({ href, ...props }) => {
                if (!href) {
                  return <a {...props}></a>;
                }
                if (checkIfExternalURL(href)) {
                  return (
                    <a
                      href={href}
                      {...props}
                      rel="noopener noreferrer"
                      target="_blank"
                    ></a>
                  );
                }
                return (
                  <Link href={href}>
                    <a {...props}></a>
                  </Link>
                );
              },
            }}
            {...data.longDescription}
          />
        </article>
        <hr></hr>
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-10 m-5 col-span-2">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Reviews:
            </p>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <ProductReviewForm productId={data.id} />
        </div>
      </div>
    </>
  );
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const cartState = useCartState();
  return (
    <>
      <div className="bg-white">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="m-4 text-2xl font-bold">{data.title}</h2>
        </a>
      </Link>
      <Price price={data.price} />
      <button
        className="m-4 bg-transparent hover:bg-color-secondary text-color-primary font-semibold hover:text-white py-2 px-4 border border-color-secondary hover:border-transparent rounded"
        onClick={() =>
          cartState.addItemToCart({
            id: data.id,
            price: data.price,
            title: data.title,
            count: 1,
          })
        }
      >
        Add to basket
      </button>
    </>
  );
};

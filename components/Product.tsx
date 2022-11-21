import { Rating as Price } from "./Price";
import { ProductProps, ProductListItemProps } from "types";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { checkIfExternalURL } from "@/utils/checkIfExternalURL";
import { useCartState } from "context/CartContext";
// import { AddReviewForm } from "./form/AddReviewForm";

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
        <div>reviews</div>
        <hr></hr>
        {/* <AddReviewForm/> */}
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

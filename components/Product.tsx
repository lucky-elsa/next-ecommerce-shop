import { Rating } from "./Rating";
import { ProductProps, ProductListItemProps } from "../types";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown'

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
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
      <ReactMarkdown className="p-4">{data.longDescription}</ReactMarkdown>
      </article>
      <Rating rating={data.rating} />
    </>
  );
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
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
          <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </>
  );
};

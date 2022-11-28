import { useGetReviewsByProductSlugQuery } from "generated/graphql";
import { ProductReviewItem } from "./ProductReviewItem";

interface ProductReviewListProps {
  productSlug: string;
}

export const ProductReviewList = ({ productSlug }: ProductReviewListProps) => {
  const { data, loading, error } = useGetReviewsByProductSlugQuery({
    variables: {
      slug: productSlug,
    },
  });

  if (!data) return null;

  return (
    <div className="flex flex-col gap-10 m-5 col-span-2">
      <p className="block uppercase max-w-lg mx-auto tracking-wide text-gray-700 text-xs font-bold mb-2">
        Reviews:
      </p>
      <ul>
        {data.product?.reviews.map((review) => (
          <ProductReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};

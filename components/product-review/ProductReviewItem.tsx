import { ReviewContentFragment } from "generated/graphql";

interface ProductReviewItemProps {
  review: ReviewContentFragment;
}

export function ProductReviewItem({ review }: ProductReviewItemProps) {
  return (
    <li className="border mt-4 bg-white p-2 max-w-lg mx-auto shadow-md rounded-md">
      <p className="font-bold">
        <span>{review.name}</span> <span>rated: {review.rating} / 5</span>
      </p>
      <p className="my-2 italic">{review.review}</p>
    </li>
  );
}

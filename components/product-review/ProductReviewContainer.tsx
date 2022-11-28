import { ProductReviewForm } from "./ProductReviewForm";
import { ProductReviewList } from "./ProductReviewList";

interface ProductReviewContainerProps {
  productSlug: string;
}

export const ProductReviewContainer = ({
  productSlug,
}: ProductReviewContainerProps) => {
  return (
    <div className="grid grid-cols-4">
      <ProductReviewList productSlug={productSlug} />
      <ProductReviewForm productId={productSlug} />
    </div>
  );
};

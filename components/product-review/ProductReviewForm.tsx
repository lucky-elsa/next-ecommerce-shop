import { Input } from "../form/components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productReviewFormSchema } from "@/utils/validations/productReviewFormSchema";
import { productReviewFormFields } from "@/utils/data/productReviewFormFields";
import { FormTypes } from "types";
import { Textarea } from "../form/components/Textarea";
import {
  CreateReviewDocument,
  GetReviewsByProductSlugDocument,
  GetReviewsByProductSlugQuery,
  useCreateReviewMutation,
} from "generated/graphql";

type AddReviewFormProps = {
  productId: string;
};

export const ProductReviewForm = ({ productId }: AddReviewFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({
    resolver: yupResolver(productReviewFormSchema),
  });
  const [createReview, { error }] = useCreateReviewMutation({
    // refetchQueries: [
    //   {
    //     query: GetReviewsByProductSlugDocument,
    //     variables: { slug: productId },
    //   },
    // ],
    update(cache, result) {
      result.data?.createReview;
      const originalReviewsQuery =
        cache.readQuery<GetReviewsByProductSlugQuery>({
          query: GetReviewsByProductSlugDocument,
          variables: { slug: productId },
        });

      if (
        !originalReviewsQuery ||
        !originalReviewsQuery.product ||
        !result.data?.createReview
      ) {
        // @todo
        return;
      }

      const newReviewsQuery = {
        ...originalReviewsQuery,
        product: {
          ...originalReviewsQuery.product,
          reviews: [
            ...originalReviewsQuery.product.reviews,
            result.data.createReview,
          ],
        },
      };

      cache.writeQuery({
        query: GetReviewsByProductSlugDocument,
        variables: { slug: productId },
        data: newReviewsQuery,
      });
    },
  });

  const onSubmit = async (reviewData: FormTypes) => {
    const review = {
      name: reviewData.name,
      email: reviewData.email,
      rating: Number(reviewData.rating),
      review: reviewData.review,
      product: { connect: { slug: productId } },
    };
    await createReview({
      mutation: CreateReviewDocument,
      variables: {
        review: review,
      },
      optimisticResponse: {
        __typename: "Mutation",
        createReview: {
          __typename: "Review",
          id: (-Math.random()).toString(),
          name: reviewData.name,
          rating: Number(reviewData.rating),
          review: reviewData.review,
        },
      },
    });
    if (error) alert("Something when wrong. Please try again.");
    reset();
    alert("Review submitted. It might take a few hours to be published.");
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center w-full mt-4"
    >
      <div className="flex flex-col">
        {productReviewFormFields.map((field) => {
          if (field.type === "textarea") {
            return (
              <Textarea
                key={field.name}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                register={register}
                errors={errors}
              />
            );
          } else {
            return (
              <Input
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                register={register}
                errors={errors}
              />
            );
          }
        })}
      </div>
      <button
        type="submit"
        className="m-4 self-center bg-transparent hover:bg-color-secondary text-color-primary font-semibold hover:text-white py-2 px-4 border border-color-secondary hover:border-transparent rounded"
      >
        Add review
      </button>
    </form>
  );
};

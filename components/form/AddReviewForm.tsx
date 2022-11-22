import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addReviewFormSchema } from "@/utils/validations/addReviewFormSchema";
import { addReviewFormFields } from "@/utils/data/addReviewFormFields";
import { FormTypes } from "types";
import { Textarea } from "./Textarea";
import { CreateReviewDocument, useCreateReviewMutation } from "generated/graphql";

export const AddReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes<string | number>>({
    resolver: yupResolver(addReviewFormSchema),
  });
  const [createReview, { error }] = useCreateReviewMutation();

  const onSubmit = async (reviewData: FormTypes<string | number>) => {
    const review = {
      name: reviewData.name.toString(),
      email: reviewData.email.toString(),
      rating: Number(reviewData.rating),
      review: reviewData.review.toString()
    };
    await createReview({
      mutation: CreateReviewDocument,
      variables: {
        review: review,
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
        {addReviewFormFields.map((field) => {
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

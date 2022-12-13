import * as yup from "yup";

export const productReviewFormSchema = yup.object({
  name: yup
    .string()
    .required("This field cannot be empty")
    .min(3, "Name has to be at least 3 characters long"),
  email: yup
    .string()
    .required("This field cannot be empty")
    .min(6, "Email has to be at least 3 characters long")
    .email("This field has to be valid email"),
  rating: yup
    .number()
    .typeError("Number in range 1-5 has to be added")
    .required("This field cannot be empty")
    .min(1, "Number cannot be less than 1")
    .max(5, "Number cannot be more than 5"),
  review: yup.string().required("This field cannot be empty"),
});

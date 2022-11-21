import * as yup from "yup";

export const addReviewFormSchema = yup.object({
    name: yup.string().required("This field cannot be empty").min(3, "Name has to be at least 3 characters long"),
    email: yup.string().required("This field cannot be empty").min(6, "Email has to be at least 3 characters long").email("This field has to be valid email"),
    rating: yup.string().required("This field cannot be empty").min(1).max(5),
    review: yup.string().required("This field cannot be empty")
  });
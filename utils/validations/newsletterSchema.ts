import * as yup from "yup";

export const newsletterFormSchema = yup.object({
    email: yup.string().required("Email is required").min(6, "Email has to be at least 3 characters long").email("This field has to be valid email"),
  });
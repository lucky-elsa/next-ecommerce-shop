import * as yup from "yup";

export const checkoutFormSchema = yup.object({
    firstName: yup.string().required("This field cannot be empty").min(3, "Name has to be at least 3 characters long"),
    lastName: yup.string().required("This field cannot be empty").min(3, "Surname has to be at least 3 characters long"),
    email: yup.string().required("This field cannot be empty").min(6, "Email has to be at least 3 characters long").email("This field has to be valid email"),
    cardNumber: yup.string().required("This field cannot be empty").min(16, "Card number has to be at least 16 digits").max(19, "Card number has to be max 19 digits"),
    expiryDate: yup.string().required("This field cannot be empty"),
    CVVNumber: yup.string().required("This field cannot be empty").min(3, "CVV number has to be 3 digits").max(3, "CVV number has to be 3 digits")
  });
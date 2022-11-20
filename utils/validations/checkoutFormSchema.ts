import * as yup from "yup";

export const checkoutFormSchema = yup.object({
    firstName: yup.string().required("This field cannot be empty").min(3, "Name has to be at least 3 characters long"),
    lastName: yup.string().required("This field cannot be empty").min(3, "Surname has to be at least 3 characters long"),
    email: yup.string().required("This field cannot be empty").min(6, "Email has to be at least 3 characters long").email("This field has to be valid email"),
    cardNumber: yup.string().required("This field cannot be empty").min(16, "Card number has to be at least 16 digits").max(19, "Card number has to be max 19 digits"),
    expiryDate: yup.date().required("This field cannot be empty").min(new Date(), "Expiry date cannot be in the past"),
    CVVNumber: yup.string().required("This field cannot be empty").min(3, "CVV number has to be 3 digits").max(3, "CVV number has to be 3 digits")
  });
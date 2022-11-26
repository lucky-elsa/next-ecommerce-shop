type productReviewFormDetailsFieldsT = {
  name: "name" | "email" | "rating" | "review";
  label: string;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
};

export const productReviewFormFields: productReviewFormDetailsFieldsT[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Please enter your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Please enter your email",
  },
  {
    name: "rating",
    label: "Rating",
    type: "number",
    placeholder: "Please add rating from 1 to 5",
  },
  {
    name: "review",
    label: "Review",
    type: "textarea",
    placeholder: "Start typing your review",
  },
];

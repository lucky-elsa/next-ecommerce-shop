type checkoutFormDetailsFieldsT = {
  name: "firstName" | "lastName" | "email";
  label: string;
  type: "text" | "email";
  placeholder: string;
};

export const checkoutFormDetailsFields: checkoutFormDetailsFieldsT[] = [
  {
    name: "firstName",
    label: "First name",
    type: "text",
    placeholder: "Please enter your name",
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
    placeholder: "Please enter your surname",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Please enter your email",
  },
];

type checkoutFormPaymentsFieldsT = {
  name: "cardNumber" | "expiryDate" | "CVVNumber";
  label: string;
  type: "number" | "date";
  placeholder: string;
};

export const checkoutFormPaymentsFields: checkoutFormPaymentsFieldsT[] = [
  {
    name: "cardNumber",
    label: "Card Number",
    type: "number",
    placeholder: "Please enter your card number",
  },
  {
    name: "expiryDate",
    label: "Expiry date",
    type: "date",
    placeholder: "Please enter your card expiry date",
  },
  {
    name: "CVVNumber",
    label: "CVV Number",
    type: "number",
    placeholder: "Please enter your card CVV number",
  },
];

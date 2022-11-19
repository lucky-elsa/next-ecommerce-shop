import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutFormTypes } from "types";
import { checkoutFormSchema } from "@/utils/validations/checkoutFormSchema";

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormTypes>({ resolver: yupResolver(checkoutFormSchema) });

  const onSubmit = async (formData: CheckoutFormTypes) => {
    console.log(formData);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg"
    >
      <p className="w-full px-3 mb-6 md:mb-0 py-10 text-2xl">Checkout</p>
      <div>
        <Input
          name="firstName"
          label="First name"
          type="text"
          placeholder="Please enter your name"
          register={register}
          errors={errors}
        />
        <Input
          name="lastName"
          label="Last name"
          type="text"
          placeholder="Please enter your surname"
          register={register}
          errors={errors}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Please enter your email"
          register={register}
          errors={errors}
        />
      </div>
      <p className="w-full px-3 mb-6 md:mb-0 py-10 text-2xl">Payment details</p>
      <Input
        name="cardNumber"
        label="Card Number"
        type="number"
        placeholder="Please enter your card number"
        register={register}
        errors={errors}
      />
      <Input
        name="expiryDate"
        label="Expiry Date"
        type="date"
        placeholder="Please enter your card expiry date"
        register={register}
        errors={errors}
      />
      <Input
        name="CVVNumber"
        label="CVV"
        type="number"
        placeholder="Please enter your card CVV number"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        className="m-4 bg-transparent hover:bg-color-secondary text-color-primary font-semibold hover:text-white py-2 px-4 border border-color-secondary hover:border-transparent rounded"
      >
        Submit
      </button>
    </form>
  );
};

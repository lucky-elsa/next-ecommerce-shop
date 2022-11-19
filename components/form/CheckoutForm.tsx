import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutFormTypes } from "types";
import { checkoutFormSchema } from "@/utils/validations/checkoutFormSchema";
import {
  checkoutFormDetailsFields,
  checkoutFormPaymentsFields,
} from "@/utils/data/checkoutFormFields";

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
        {checkoutFormDetailsFields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <p className="w-full px-3 mb-6 md:mb-0 py-10 text-2xl">Payment details</p>
      {checkoutFormPaymentsFields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          register={register}
          errors={errors}
        />
      ))}
      <button
        type="submit"
        className="m-4 bg-transparent hover:bg-color-secondary text-color-primary font-semibold hover:text-white py-2 px-4 border border-color-secondary hover:border-transparent rounded"
      >
        Submit
      </button>
    </form>
  );
};

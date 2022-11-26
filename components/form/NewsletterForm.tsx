import { newsletterFormSchema } from "@/utils/validations/newsletterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormTypes } from "types";
import { Input } from "./Input";

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({ resolver: yupResolver(newsletterFormSchema) });

  const onSubmit = async (formData: FormTypes) => {
    await fetch("http://localhost:3000/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });
    reset();
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center"
    >
      <Input
        name="email"
        type="text"
        label="Newsletter"
        placeholder="Your email"
        register={register}
        errors={errors}
      />
      <button
        className="w-24 h-10 mb-3 bg-white hover:bg-gray text-color-primary hover:text-color-secondary font-semibold hover:border-transparent rounded px-2"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

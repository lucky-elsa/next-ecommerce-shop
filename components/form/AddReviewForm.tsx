import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addReviewFormFields } from "@/utils/data/addReviewFormFields";
import { addReviewFormSchema } from "@/utils/validations/addReviewFormSchema";

export const AddReviewForm = () => {

  return (
    <form
      noValidate
      className="w-full max-w-lg"
    >
      <div>
      </div>
      <button
        type="submit"
        className="m-4 bg-transparent hover:bg-color-secondary text-color-primary font-semibold hover:text-white py-2 px-4 border border-color-secondary hover:border-transparent rounded"
      >
        Add review
      </button>
    </form>
  );
};
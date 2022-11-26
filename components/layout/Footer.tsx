import { NewsletterForm } from "../form/NewsletterForm";

export const Footer = () => {
  return (
    <footer className="max-w mx-auto w-full flex justify-between justify-items-center items-center gap-2 p-2 px-8 border-t border-gray-300 bg-color-secondary text-color-grey">
      <NewsletterForm />
      <p>Shoppy Shop</p>
    </footer>
  );
};

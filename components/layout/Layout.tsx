import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow max-w-screen-2xl mx-auto w-full px-4`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </QueryClientProvider>);
}

export default MyApp;

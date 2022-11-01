import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <DefaultSeo {...SEO}/>
      <Component {...pageProps} />
    </Layout>
  </QueryClientProvider>);
}

export default MyApp;

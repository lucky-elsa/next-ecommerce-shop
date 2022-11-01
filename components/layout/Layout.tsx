import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

type LayoutProps = {
    children?: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title></title>
            </Head>
            <Header/>
            <main className="flex-grow max-w-screen-2xl mx-auto w-full px-4 py-2">{children}</main>
            <Footer/>
        </div>
    )
}
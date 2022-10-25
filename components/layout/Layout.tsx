import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
    children?: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow max-w mx-auto w-full px-4 py-2 bg-color-secondary">{children}</main>
            <Footer/>
        </div>
    )
}
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

type LayoutProps = {
    children?: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Sidebar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
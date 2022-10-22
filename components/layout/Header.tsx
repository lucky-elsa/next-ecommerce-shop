import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="max-w mx-auto w-full h-14 flex justify-center content-center">
            <nav className="max-w mx-auto w-full flex justify-between content-center gap-2 p-2 px-8 border-b border-gray-300">
                <Image src="/assets/common/planty-logo.svg" alt="Planty" width={60} height={60}/>
                <div className="flex justify-items-center items-center gap-10">
                <Link href="">
                    <a>Shop</a>
                </Link>
                <Link href="">
                    <a>About</a>
                </Link>
                <Link href="">
                    <a>Plant Care</a>
                </Link>
                <Link href="">
                    <a>Blog</a>
                </Link>
                </div>
                <div className="flex justify-items-center items-center gap-2">
                <Link href="">
                    <a>Basket</a>
                </Link>
                <Link href="">
                    <a>Fav</a>
                </Link>
                <Link href="">
                    <a>Profile</a>
                </Link>
                </div>
            </nav>
        </header>
    )
}
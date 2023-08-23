import Link from "next/link" 
import Image from "next/image"


function Header() {
    return(
        <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white
        z-50 shadow">
            <Link href="/">
                <Image
                src="https://i.ibb.co/McdzmYG/logo-removebg-preview.png"
                width={70}
                height={70}
                alt="logo"
                />
            </Link>
            <div className="flex items-center space-x-2.5 text-sm">
                <button className="button bg-blue-600 text-white border-transparent hover:bg-blue-600
                hover:bg-transparent hover:text-black">
                    Log In
                    </button>
                <button className="button border-transparent border-blue-600 hover:bg-blue-600 hover:text-white
                hover:border-transparent">
                    Sign up
                    </button>
            </div>
        </header>
    )
}

export default Header;
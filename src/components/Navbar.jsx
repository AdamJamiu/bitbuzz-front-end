import { Link } from "react-router-dom";
import logo from "/images/bit-buzz-logo.svg"

const Navbar = () => {
    return (
        <nav className="w-full flex flex-row justify-between items-center bg-[#0F0F0F] h-20 px-4 md:px-10 font-space-mono fixed">
            <div className="flex flex-row justify-start items-center gap-10 w-full">
                <img src={logo} />
                <div className="relative w-full">
                    <input type="search" className="w-full py-3 px-4 bg-transparent border border-[#202020] placeholder:text-white rounded-lg" placeholder="Search..." />
                    <svg className="absolute right-3 top-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.485 20.154L13.223 13.892C12.723 14.318 12.148 14.6477 11.498 14.881C10.848 15.1144 10.1947 15.231 9.538 15.231C7.93667 15.231 6.58133 14.6767 5.472 13.568C4.36267 12.4587 3.808 11.1037 3.808 9.50304C3.808 7.90238 4.362 6.54671 5.47 5.43604C6.57867 4.32471 7.93333 3.76904 9.534 3.76904C11.1353 3.76904 12.4913 4.32371 13.602 5.43304C14.7127 6.54238 15.268 7.89804 15.268 9.50004C15.268 10.1947 15.145 10.867 14.899 11.517C14.6523 12.167 14.329 12.723 13.929 13.185L20.191 19.446L19.485 20.154ZM9.538 14.23C10.8647 14.23 11.985 13.7734 12.899 12.86C13.8123 11.9467 14.269 10.8264 14.269 9.49904C14.269 8.17238 13.8123 7.05238 12.899 6.13904C11.9857 5.22571 10.8657 4.76904 9.539 4.76904C8.21233 4.76904 7.092 5.22571 6.178 6.13904C5.26467 7.05238 4.808 8.17238 4.808 9.49904C4.808 10.8257 5.26467 11.9457 6.178 12.859C7.09133 13.7724 8.21133 14.23 9.538 14.23Z" fill="white" />
                    </svg>

                </div>
            </div>

            <div className="flex flex-row justify-end items-center gap-4 w-full">
                <Link to="/" className="bg-white rounded-lg p-3 font-medium hover:bg-gray-100 ease transition-all text-sm">
                    Connect wallet
                </Link>

                <Link to="/" className="bg-white rounded-lg p-3 font-medium hover:bg-gray-100 ease transition-all text-sm">
                    Login
                </Link>

                <Link to="/signup" className="bg-primary-purple text-white rounded-lg p-3 font-medium hover:bg-purple-800 hover:text-white ease transition-all text-sm">
                    Signup
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
import avatarBanner from "/images/avatar-banner.jpg"
import trailer1 from "/images/trailer-1.jpg"
import trailer2 from "/images/trailer-2.jpg"

const Home = () => {
    return (
        <div className="p-7 xs:p-4 w-full">
            <img src={avatarBanner} className="sm:block hidden" />

            <h2 className="font-semibold my-5 text-white">Categories</h2>

            <div className="w-full flex flex-row justify-start items-center gap-4 my-4  text-sm overflow-hidden">
                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    All
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Music
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Trailers
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Comedy
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Drama
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Sports
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Cooking
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    Fashion
                </button>
            </div>

            <h2 className="font-semibold my-5 text-white ">Recommended</h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-14">
                <img src={trailer1} className="rounded-lg" />
                <img src={trailer2} className="rounded-lg" />
                <img src={trailer1} className="rounded-lg" />
                <img src={trailer2} className="rounded-lg" />
                <img src={trailer1} className="rounded-lg" />
            </div>

        </div>
    )
}

export default Home;
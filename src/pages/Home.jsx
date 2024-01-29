import avatarBanner from "/images/avatar-banner.jpg"
import trailer1 from "/images/avatar-banner.jpg"

const Home = () => {
    return (
        <div className="p-4 w-full">
            <img src={avatarBanner} />

            <h2 className="font-semibold my-5 text-white font-space-mono">Categories</h2>

            <div className="w-full flex flex-row justify-start items-center gap-4 my-4 font-space-mono text-sm">
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

            <h2 className="font-semibold my-5 text-white font-space-mono">Recommended</h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <img src={avatarBanner} className="rounded-lg" />
                <img src={avatarBanner} className="rounded-lg" />
                <img src={avatarBanner} className="rounded-lg" />
                <img src={avatarBanner} className="rounded-lg" />
                <img src={avatarBanner} className="rounded-lg" />
            </div>

        </div>
    )
}

export default Home;
import { httpClient } from "../api/apiClient"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useQuery } from "@tanstack/react-query"
// swiper imports
import { Scrollbar, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import MovieLoadingSkeleton from "../components/MovieLoadingSkeleton";

const Home = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["get-movies"],
        queryFn: () => httpClient.get("discover/movie").then(res => res?.data),
        refetchOnMount: true,
        refetchOnWindowFocus: false
    })

    const { data: popular, isLoading: popularLoading } = useQuery({
        queryKey: ["get-movies-popular"],
        queryFn: () => httpClient.get("movie/popular").then(res => res?.data),
        refetchOnMount: true,
        refetchOnWindowFocus: false
    })
    // console.log(data)
    return (
        <div className="p-7 xs:p-4 w-full">

            <h2 className="font-semibold my-5 text-white">Categories</h2>

            <div className="w-full flex flex-row justify-start items-center gap-4 mt-4 mb-16 text-sm overflow-hidden">
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

            {popularLoading ? <MovieLoadingSkeleton />
                :

                <>
                    <h2 className="font-semibold my-5 text-white text-xl">Most Popular</h2>

                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        pagination={{
                            enabled: true,
                            clickable: true
                        }}
                        scrollbar={true}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1.4,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 1.5,
                                spaceBetween: 10,
                            },
                            "@1.00": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.50": {
                                slidesPerView: 2.4,
                                spaceBetween: 20,
                            },
                        }}
                        slidesPerView={6}
                        spaceBetween={25}
                        modules={[Scrollbar, Pagination, Autoplay]}
                        className="w-full pb-12"
                    >
                        {popular?.results?.map((item, index) => (

                            <SwiperSlide key={index} className="group text-white rounded-xl cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                                <div className="relative overflow-hidden">
                                    <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} className="rounded-lg group-hover:scale-105 ease-in-out transition-transform duration-300" />
                                </div>
                                <div className="absolute hidden group-hover:flex ease-in transition-all duration-300 top-0 bottom-0 left-0 w-full h-full black-transparent flex-col justify-between p-4 z-50 rounded-lg">
                                    <p className="text-white font-semibold">{item?.release_date}</p>
                                    <div className="p-3 bg-white w-fit rounded-full self-center">
                                        <PlayArrowIcon fontSize="large" color="error" />
                                    </div>
                                    <p className="text-white font-semibold">{item?.title}</p>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </>
            }

            {isLoading ? <MovieLoadingSkeleton />
                :
                <>
                    <h2 className="font-semibold my-5 text-white text-xl">Latest</h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-14">
                        {data?.results?.map((item, index) => (
                            <div className="relative group overflow-hidden h-full rounded-md" key={index}>
                                <div className="absolute hidden group-hover:flex ease-in transition-all duration-300 top-0 bottom-0 left-0 w-full h-full black-transparent flex-col justify-between p-4 z-40">
                                    <p className="text-white font-semibold">{item?.release_date}</p>
                                    <div className="p-3 bg-white w-fit rounded-full self-center">
                                        <PlayArrowIcon fontSize="large" color="error" />
                                    </div>
                                    <p className="text-white font-semibold">{item?.title}</p>
                                </div>
                                <div className="relative overflow-hidden">
                                    <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} className="rounded-lg group-hover:scale-105 ease-in-out transition-transform duration-300" />
                                </div>
                                <div className="">
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }

        </div>
    )
}

export default Home;
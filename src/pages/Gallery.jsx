import mildImg from "/images/mill-and-boyd.jpg"
import avatarBanner from "/images/avatar-banner.jpg"

// swiper imports
import { Scrollbar, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const GalleryPage = () => {
    return (
        <div className="w-full p-5 font-space-mono">
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
                <div className="rounded-lg py-6 px-4 w-full bg-primary-purple text-white text-center">
                    <h1 className="text-xl font-semibold">$550k</h1>
                    <p>Revenue earned</p>
                </div>
                <div className="rounded-lg py-6 px-4 w-full bg-primary-purple text-white text-center">
                    <h1 className="text-xl font-semibold">$550k</h1>
                    <p>Revenue earned</p>
                </div>
                <div className="rounded-lg py-6 px-4 w-full bg-primary-purple text-white text-center">
                    <h1 className="text-xl font-semibold">$550k</h1>
                    <p>Revenue earned</p>
                </div>
                <div className="rounded-lg py-6 px-4 w-full bg-primary-purple text-white text-center">
                    <h1 className="text-xl font-semibold">$550k</h1>
                    <p>Revenue earned</p>
                </div>
            </div>

            <h1 className="text-xl font-semibold text-white">Top Videos</h1>

            {/* Top Videos */}

            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={3000}
                pagination={true}
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
                className="w-full my-5 bg-black p-5 rounded-lg"
            >
                <SwiperSlide className="text-white bg-[#0F0F0F] p-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                    <img src={avatarBanner} className="" />
                    <p className="my-3 font-medium">jaaon holding</p>

                    <div className="w-full flex flex-row justify-between items-center font-semibold">
                        <span>2.1m</span>
                        <span className="text-green-500">+12.1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-white bg-[#0F0F0F] p-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                    <img src={avatarBanner} className="" />
                    <p className="my-3 font-medium">jaaon holding</p>

                    <div className="w-full flex flex-row justify-between items-center font-semibold">
                        <span>2.1m</span>
                        <span className="text-green-500">+12.1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-white bg-[#0F0F0F] p-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                    <img src={avatarBanner} className="" />
                    <p className="my-3 font-medium">jaaon holding</p>

                    <div className="w-full flex flex-row justify-between items-center font-semibold">
                        <span>2.1m</span>
                        <span className="text-green-500">+12.1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-white bg-[#0F0F0F] p-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                    <img src={avatarBanner} className="" />
                    <p className="my-3 font-medium">jaaon holding</p>

                    <div className="w-full flex flex-row justify-between items-center font-semibold">
                        <span>2.1m</span>
                        <span className="text-green-500">+12.1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-white bg-[#0F0F0F] p-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                    <img src={avatarBanner} className="" />
                    <p className="my-3 font-medium">jaaon holding</p>

                    <div className="w-full flex flex-row justify-between items-center font-semibold">
                        <span>2.1m</span>
                        <span className="text-green-500">+12.1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-white bg-[#0F0F0F] p-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out transition-opacity">
                    <img src={avatarBanner} className="" />
                    <p className="my-3 font-medium">jaaon holding</p>

                    <div className="w-full flex flex-row justify-between items-center font-semibold">
                        <span>2.1m</span>
                        <span className="text-green-500">+12.1</span>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default GalleryPage;
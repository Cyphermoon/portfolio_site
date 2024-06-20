/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"


import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { carouselType } from "../../types";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { CiBatteryEmpty } from "react-icons/ci";

const Carousel = ({ carouselItems }: carouselType) => {

    if (!carouselItems || carouselItems?.length === 0) return (
        <div className='w-full h-full flex flex-col justify-center items-center space-y-10 animate-fadeIn dark:text-slate-500 text-slate-700'>
            <CiBatteryEmpty className='text-[10rem] ' />
            <h1 className='text-center text-xl lg:text-4xl '>Sorry, this project has no demo images yet. 😔 </h1>
        </div>
    )

    return (
        <>
            <Swiper
                spaceBetween={60}
                effect="fade"
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                className="w-full h-full"
            // breakpoints={{
            //     // when window width is >= 640px
            //     640: {
            //         width: 640,
            //     },
            //     // when window width is >= 768px
            //     768: {
            //         width: 768,
            //     },
            // }}
            >
                {carouselItems && carouselItems.length > 0 && carouselItems.map((item, i) => (
                    <SwiperSlide key={i} >
                        <figure className="w-full h-full relative before:w-full
                            before:h-full before:transition-opacity duration-100ms
                            before:inset-0 before:z-10 before:absolute before:bg-black/20">
                            <Image
                                layout="fill"
                                src={item.imageURL}
                                alt={`image slide ${i}`}
                                objectFit="cover"
                            />
                        </figure>

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel
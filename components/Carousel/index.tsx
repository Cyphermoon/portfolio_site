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

const Carousel = ({ carouselItems }: carouselType) => {
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
                {carouselItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        <figure className="w-full h-full relative before:w-full
                        before-h-full before:transition-opacity duration-100ms
                        before:inset-0 before:z-10 before:absolute before:bg-black before:opacity-10">
                            <Image
                                priority
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
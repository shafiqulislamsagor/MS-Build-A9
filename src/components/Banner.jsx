import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className='w-[95%] lg:w-4/5 mx-auto mt-8 '>
            <Swiper
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}

                effect={'coverflow'}
                className="mySwiper bg-transparent rounded-2xl"
            >
                <SwiperSlide>
                    <img className='max-w-full' src="https://i.ibb.co/Nn8dDjT/slider5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-w-full' src="https://i.ibb.co/7QsDPRc/slider4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-w-full' src="https://i.ibb.co/N2j1W4T/slider3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-w-full' src="https://i.ibb.co/G3xfGJy/slider2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-w-full' src="https://i.ibb.co/zfL8rDy/slider1.jpg" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
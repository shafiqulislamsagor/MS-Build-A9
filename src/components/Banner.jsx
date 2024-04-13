import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import './banner.css'
import './../fonts/fonts.css'

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import BannerAnimation from './BannerAnimation';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='w-[95%] lg:w-4/5 mx-auto mt-8 saira'>
            <Swiper
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
                    delay: 5000,
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
                    <div className='sliderA min-h-screen'>
                        <div className='bg-black bg-opacity-70 w-full min-h-screen max-h-full'>
                            <section className="py-5 bg-transparent text-gray-100 flex flex-col justify-center min-h-full">
                                <div className="container lg:w-1/2  mx-auto lg:mt-16 flex flex-col items-center px-4 py-16 text-center ">
                                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Luxury <span className="webPrimary">Apartment </span>Services
                                    </h1>
                                    <p className="mt-6 mb-8 text-lg font-light sm:mb-12 lato">Explore a diverse range of residential options tailored to your lifestyle. Whether you&apos;re seeking a cozy apartment!</p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <Link to='/profile'><button className="btn h-auto px-8 py-3 text-lg rounded webPrimaryBg text-white lato font-medium">Get started</button></Link>
                                        <Link><button className="btn h-auto px-4 py-3 text-lg webPrimary border rounded border-gray-100 webPrimaryBorder lato font-medium ">Learn more</button></Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sliderB min-h-screen'>
                        <div className='bg-black bg-opacity-70 w-full min-h-screen'>
                            <section className="py-5 bg-transparent text-gray-100 flex flex-col justify-center">
                                <div className="container flex items-end mt-16 w-11/12 mx-auto py-4">
                                    <div className="w-full flex-1">
                                        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Find Your <span className='webPrimary'>Perfect</span> Home
                                        </h1>
                                        <p className="mt-6 mb-8 text-lg font-light sm:mb-12 lato">Explore a diverse range of residential options tailored to your lifestyle. Whether you&apos;re seeking a cozy apartment !!
                                        </p>
                                        <div className="flex   items-center justify-center  space-y-0 space-x-4 lg:justify-start">
                                            <Link to='/profile'><button className="btn h-auto px-8 py-3 text-lg rounded webPrimaryBg text-white lato font-medium">Get started</button></Link>
                                            <Link><button className="btn h-auto px-4 py-3 text-lg webPrimary border rounded border-gray-100 webPrimaryBorder lato font-medium ">Learn more</button></Link>
                                        </div>
                                    </div>
                                    <div className='hidden lg:w-1/2 lg:block'>

                                        <BannerAnimation />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sliderC min-h-screen'>
                        <div className='bg-black bg-opacity-70 w-full min-h-screen'>
                            <section className="py-5 bg-transparent text-gray-100 flex flex-col justify-center">
                                <div className="container flex items-end mt-16 w-11/12 mx-auto py-4">
                                    <div className="w-full flex-1">
                                        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Find Your <span className='webPrimary'>Perfect</span> Home
                                        </h1>
                                        <p className="mt-6 mb-8 text-lg font-light sm:mb-12 lato">Explore a diverse range of residential options tailored to your lifestyle. Whether you&apos;re seeking a cozy apartment !!
                                        </p>
                                        <div className="flex   items-center justify-center  space-y-0 space-x-4 lg:justify-start">
                                            <Link to='/profile'><button className="btn h-auto px-8 py-3 text-lg rounded webPrimaryBg text-white lato font-medium">Get started</button></Link>
                                            <Link><button className="btn h-auto px-4 py-3 text-lg webPrimary border rounded border-gray-100 webPrimaryBorder lato font-medium ">Learn more</button></Link>
                                        </div>
                                    </div>
                                    <div className='hidden lg:w-1/2 lg:block'>

                                        <BannerAnimation />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sliderD min-h-screen'>
                        <div className='bg-black bg-opacity-70 w-full min-h-screen'>
                            <section className="py-5 bg-transparent text-gray-100 flex flex-col justify-center">
                                <div className="container flex items-end mt-16 w-11/12 mx-auto py-4">
                                    <div className="w-full flex-1">
                                        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Find Your <span className='webPrimary'>Perfect</span> Home
                                        </h1>
                                        <p className="mt-6 mb-8 text-lg font-light sm:mb-12 lato">Explore a diverse range of residential options tailored to your lifestyle. Whether you&apos;re seeking a cozy apartment !!
                                        </p>
                                        <div className="flex   items-center justify-center  space-y-0 space-x-4 lg:justify-start">
                                            <Link to='/profile'><button className="btn h-auto px-8 py-3 text-lg rounded webPrimaryBg text-white lato font-medium">Get started</button></Link>
                                            <Link><button className="btn h-auto px-4 py-3 text-lg webPrimary border rounded border-gray-100 webPrimaryBorder lato font-medium ">Learn more</button></Link>
                                        </div>
                                    </div>
                                    <div className='hidden lg:w-1/2 lg:block'>

                                        <BannerAnimation />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sliderE min-h-screen'>
                        <div className='bg-black bg-opacity-70 w-full min-h-screen'>
                            <section className="py-5 bg-transparent text-gray-100 flex flex-col justify-center">
                                <div className="container flex items-end mt-16 w-11/12 mx-auto py-4">
                                    <div className="w-full flex-1">
                                        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Find Your <span className='webPrimary'>Perfect</span> Home
                                        </h1>
                                        <p className="mt-6 mb-8 text-lg font-light sm:mb-12 lato">Explore a diverse range of residential options tailored to your lifestyle. Whether you&apos;re seeking a cozy apartment !!
                                        </p>
                                        <div className="flex   items-center justify-center  space-y-0 space-x-4 lg:justify-start">
                                            <Link to='/profile'><button className="btn h-auto px-8 py-3 text-lg rounded webPrimaryBg text-white lato font-medium">Get started</button></Link>
                                            <Link><button className="btn h-auto px-4 py-3 text-lg webPrimary border rounded border-gray-100 webPrimaryBorder lato font-medium ">Learn more</button></Link>
                                        </div>
                                    </div>
                                    <div className='hidden lg:w-1/2 lg:block'>

                                        <BannerAnimation />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
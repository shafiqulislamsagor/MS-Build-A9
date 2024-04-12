// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay } from 'swiper/modules';
import { PropTypes } from 'prop-types';


const ImgSlider = ({ img }) => {
    // console.log(img);
    return (
        <div className='h-40'>
            <Swiper
                height={160}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    img.map((value, id) => <SwiperSlide className='h-40 w-full' key={id}><img className='h-40 w-full' src={value} alt="" /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ImgSlider;

ImgSlider.propTypes = {
    img: PropTypes.array
}
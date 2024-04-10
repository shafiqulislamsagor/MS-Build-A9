import Lottie from "lottie-react";
import banner from '../assets/banner.json';


const BannerAnimation = () => {
    return (
        <div className="h-full">
            <Lottie animationData={banner} loop={true} />
        </div>
    );
};

export default BannerAnimation;
import Loader from '../assets/Loader.json'
import Lottie from "lottie-react";

const LoaderAnimation = () => {
    return (
        <div className='w-1/4 mx-auto '>
            <Lottie animationData={Loader} loop={true} />
        </div>
    );
};

export default LoaderAnimation;
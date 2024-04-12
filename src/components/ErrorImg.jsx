import Lottie from "lottie-react";
import error from '../assets/ErrorAnimation.json';


const ErrorImg = () => {
    return (
        <div className="h-auto">
            <Lottie animationData={error} loop={true} />
        </div>
    );
};

export default ErrorImg;
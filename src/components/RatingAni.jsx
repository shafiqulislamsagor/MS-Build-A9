import Lottie from "lottie-react";
import ratings from '../assets/RatingAnimation.json';
const RatingAni = () => {
    return (
        <div className="h-auto">
            <Lottie animationData={ratings} loop={true} />
        </div>
    );
};

export default RatingAni;
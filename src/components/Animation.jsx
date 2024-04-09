import Lottie from "lottie-react";
import LogInAnimation from '../assets/animation.json';

const Animation = () => {
    
    return (
        <div >
            <Lottie animationData={LogInAnimation} loop={true} />
        </div>
    );
};

export default Animation;

import AnimationRegi from '../assets/Register.json'
import Lottie from "lottie-react";

const RegisterAnimation = () => {
    return (
        <div>
            <Lottie animationData={AnimationRegi} loop={true} />
        </div>
    );
};

export default RegisterAnimation;
import Lottie from "lottie-react";
import contact from '../assets/contact.json';


const ContactAnimation = () => {
    return (
        <div className="p-6 h-52 md:h-64">
            <Lottie animationData={contact} loop={true} />
        </div>
    );
};

export default ContactAnimation;
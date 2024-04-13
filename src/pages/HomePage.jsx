import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Estate from "../components/Estate";
import OurLocation from "../components/OurLocation";

const HomePage = () => {
    return (
        <div className="text-white text-xl">
            <Banner/>
            <Estate/>
            <OurLocation/>
            <Contact/>
        </div>
    );
};

export default HomePage;
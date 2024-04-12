import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Estate from "../components/Estate";
import OurLocation from "../components/OurLocation";
const Home = () => {
    // console.log(cardData);

    return (
        <div className="text-white text-xl">
            <Banner/>
            <Estate/>
            <OurLocation/>
            <Contact/>
        </div>
    );
};

export default Home;
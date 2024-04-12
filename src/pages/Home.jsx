import Banner from "../components/Banner";
import Estate from "../components/Estate";
import OurLocation from "../components/OurLocation";
const Home = () => {
    // console.log(cardData);

    return (
        <div className="text-white text-xl">
            <Banner/>
            <Estate/>
            <OurLocation/>
        </div>
    );
};

export default Home;
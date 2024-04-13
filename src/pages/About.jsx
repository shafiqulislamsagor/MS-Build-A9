import { useLoaderData } from "react-router-dom";
import Review from "../components/Review";
import TotalReview from "../components/TotalReview";
import AboutDecision from "../components/AboutDecision";



const About = () => {
    const dataLoader = useLoaderData()
    // console.log(dataLoader);
    return (
        <div className="text-white w-4/5 mx-auto ">
            <AboutDecision/>
            <h2 className="text-center webPrimary saira font-bold text-3xl opacity-85 lg:text-4xl mt-16">Customer Review</h2>
            <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                dataLoader.map((reviews,id) => <Review key={id} review={reviews}/>)
            }
            </div>
            <TotalReview/>
        </div>
    );
};

export default About;
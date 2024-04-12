import CardComponent from "../components/Card";
import { useLoaderData } from 'react-router-dom';


const Estate = () => {
    const cardData = useLoaderData();
    return (
        <div className="w-11/12 lg:w-4/5 mx-auto mt-24">
            <h2 className="text-4xl mb-10  text-center saira font-semibold">Get Ready To Launch Your Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-5">
                {
                    cardData.map((value, id) => <CardComponent key={id} card={value} />)
                }
            </div>
        </div>
    );
};

export default Estate;
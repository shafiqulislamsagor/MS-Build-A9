import { useParams, useLoaderData, Link } from 'react-router-dom';
import Gallary from './Gallary';
import { AiOutlineRollback } from "react-icons/ai";
import React from 'react';
const CardDetails = () => {
    const { id } = useParams()
    const Card = useLoaderData()
    const mainCard = Card.find((value) => value.id == id)
    const { estate_title, price, status, area, location, facilities, images, segment_name, description } = mainCard
    // console.log(price, status);
    return (
        <div>
            <div className='md:w-3/4 mx-auto mt-6'>
                <Link to='/' className='btn text-xl lg:text-3xl webPrimaryBg text-white border-2 hover:bg-orange-700 ml-8'><AiOutlineRollback/></Link>
            </div>
            <div className='mb-20'>
                <Gallary img={images} />
                <div className='text-white w-11/12 md:w-5/6 mx-auto'>
                    <h2 className='saira text-3xl md:text-5xl flex items-center gap-6'>{estate_title} <span className='text-lg rounded-xl px-2 lato font-light webPrimaryBg'>{segment_name}</span></h2>
                    <div className='lato font-light flex gap-10 mt-1 mb-4'>
                        <h2 className='opacity-70
                    '><span className='font-bold'>location :</span> {location}</h2>
                        <h2 className=' opacity-70'><span className='font-bold'>Area :</span> {area}</h2>
                    </div>

                    <h2 className='text-base md:text-xl lato font-bold'>Description: <span className=' font-light opacity-85'>{description}</span></h2>
                    <h2 className='text-lg md:text-xl font-bold webPrimary lato mt-2'>facilities : <span className='font-light text-white opacity-90'>
                        {
                            facilities.map((value, id) => <React.Fragment key={id}>
                                <span>{value}</span>
                                {id < facilities.length - 1 && ', '}
                            </React.Fragment>)
                        }
                    </span></h2>
                    <h2 className='saira mt-4 text-3xl flex items-center gap-6'>Price: {price} <span className='text-base rounded-lg  px-2 lato font-bold bg-green-500'>{status}</span></h2>
                    <button className='btn webPrimaryBg hover:bg-orange-700 border-0 mt-4'>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
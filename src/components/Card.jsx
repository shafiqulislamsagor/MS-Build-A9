import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import '../fonts/fonts.css'
import ImgSlider from './ImgSlider';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';


const CardComponent = ({ card }) => {
    // console.log(card);
    const { id, estate_title, price, status, area, location, facilities, images } = card
    return (
        <div data-aos="fade-zoom-in">
            <Card className='saira hover:scale-105 delay-150 cursor-pointer'>
                <CardActionArea className='h-full'>
                    <div className='h-40'>
                        <ImgSlider img={images} />
                    </div>
                    <CardContent className='h-[350px] flex flex-col  bg-cyan-950 bg-opacity-90 text-white'>
                        <div className='flex-1'>
                            <h3 className='text-3xl font-bold webPrimary mb-5'>{estate_title}</h3>
                            <div className='space-y-1'>
                                <h2 className='text-base font-medium opacity-90
                    '><span className='font-bold'>location :</span> {location}</h2>
                                <h2 className='text-base font-medium opacity-90'><span className='font-bold'>Area :</span> {area}</h2>
                                <h2 className='text-base font-bold opacity-90'>facilities : <span className='font-medium'>
                                    {
                                        facilities.map((value, id) => <React.Fragment key={id}>
                                            <span>{value}</span>
                                            {id < facilities.length - 1 && ', '}
                                        </React.Fragment>)
                                    }
                                </span></h2>
                                <div className='flex gap-7 opacity-90'>
                                    <h2 className='text-base font-medium'><span className='font-bold'>Price :</span> {price}</h2>
                                    <h2 className='text-base font-medium'><span className='font-bold'>Status :</span> {status}</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/card/${id}`} className='btn webPrimaryBg hover:scale-110 text-white mt-4 hover:bg-orange-700'>View Property</Link>
                        </div>

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CardComponent;

CardComponent.propTypes = {
    card: PropTypes.object
}

